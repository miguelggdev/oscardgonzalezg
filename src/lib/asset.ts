/**
 * Devuelve la URL pública correcta para assets que están en /public,
 * respetando el base configurado en Vite (import.meta.env.BASE_URL).
 */
export function assetUrl(path: string) {
  if (!path) return path;
  // Si ya es una URL absoluta externa, devolverla tal cual
  if (/^https?:\/\//.test(path)) return path;
  // Quitar slash inicial y anteponer BASE_URL (puede ser './' o '/repo/')
  const cleaned = path.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL ?? "./";
  // Asegurar que base termina con slash cuando no es './'
  if (!base.endsWith("/")) {
    return `${base}/${cleaned}`;
  }
  return `${base}${cleaned}`;
}

export default assetUrl;