addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
  
async function fetchAndStreamNotFoundPage(resp) {
  const { status, statusText } = resp
  const { readable, writable } = new TransformStream()
  
  const response = await fetch('https://furye.ru/404/')
  const { headers } = response
  
  response.body.pipeTo(writable)
  
  return new Response(readable, {
    status,
    statusText,
    headers
  })
}
  
function isHTMLContentTypeAccepted(request) {
  const acceptHeader = request.headers.get('Accept')
  return (
    typeof acceptHeader === 'string' && acceptHeader.indexOf('text/html') >= 0
  )
}
  
async function handleRequest(request) {
  const response = await fetch(request)
  
  if (response.status === 404 && isHTMLContentTypeAccepted(request)) {
    return fetchAndStreamNotFoundPage(response)
  }
  
  return response
}