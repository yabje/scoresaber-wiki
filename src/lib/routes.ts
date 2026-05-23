function stripLegacySegment(segment: string) {
  if (segment === "README.md" || segment === "index.md" || segment === "index.html") {
    return null;
  }

  if (segment.endsWith(".html")) return segment.slice(0, -5);
  if (segment.endsWith(".md")) return segment.slice(0, -3);

  return segment;
}

export function normalizeSlug(slug: string[] = []) {
  return slug.reduce<string[]>((segments, segment) => {
    const normalized = stripLegacySegment(segment);
    if (normalized) segments.push(normalized);
    return segments;
  }, []);
}
