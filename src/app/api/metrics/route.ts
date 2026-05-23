export const dynamic = "force-static";
export const revalidate = false;

export function GET() {
  return new Response(null, { status: 204 });
}
