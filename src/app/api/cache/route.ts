import { revalidatePath } from "next/cache";

export async function DELETE(_request: Request) {
  revalidatePath("/page");

  return new Response();
}
