import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-gray-800 p-64">
      <h1 className="font-extrabold text-4xl text-cyan-500">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <header className="font-extrabold text-2xl ">
        <section>
          <Link to href="http://localhost:3000/week-2" target="_blank">
            week-2
          </Link>
        </section>

        <section classname="">
          <Link href="http://localhost:3000/week-3" target="_blank">
            week-3
          </Link>
        </section>

        <section classname="font-extrabold">
          <Link href="http://localhost:3000/week-4" target="_blank">
            week-4
          </Link>
        </section>

        <section classname="font-extrabold">
          <Link href="http://localhost:3000/week-5" target="_blank">
            week-5
          </Link>
        </section>

        <section classname="font-extrabold">
          <Link href="http://localhost:3000/week-6" target="_blank">
            week-6
          </Link>
        </section>

        <section classname="font-extrabold">
          <Link href="http://localhost:3000/week-7" target="_blank">
            week-7
          </Link>
        </section>

        <section classname="font-extrabold">
          <Link href="http://localhost:3000/week-8" target="_blank">
            week-8
          </Link>
        </section>

        <section classname="font-extrabold">
          <Link href="http://localhost:3000/week-9" target="_blank">
            week-9
          </Link>
        </section>

        <section classname="font-extrabold">
          <Link href="http://localhost:3000/week-10" target="_blank">
            week-10
          </Link>
        </section>
      </header>
    </main>
  );
}
