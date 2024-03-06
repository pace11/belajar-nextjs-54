import Link from "next/link";

export default function Notes({ notes }) {
  return (
    <div>
      {notes?.data?.map((item, idx) => (
        <Link key={idx} href={`/notes/${item?.id}`}>
          <ul style={{ border: "1px solid black" }}>
            <li>title: {item?.title}</li>
            <li>description: {item?.description}</li>
          </ul>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();
  return { props: { notes }, revalidate: 5 };
}
