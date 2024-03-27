export function getIdFromUrl(url: string): string {
	// extraemos el ID dividiendo la URL por '/' y tomando el penúltimo segmento
	const segments = url.split('/');
	return segments[segments.length - 2];
}
