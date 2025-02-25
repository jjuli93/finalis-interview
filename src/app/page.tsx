import { redirect } from "next/navigation";

export default function Home() {
  // TODO: check if user is logged in
  redirect("/new-prospect");
}
