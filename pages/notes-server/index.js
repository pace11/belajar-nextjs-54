import Link from "next/link";
import useSWR from "swr";

export default function Notes({ notes }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: listNotes } = useSWR("/api/notes", fetcher, {
    refreshInterval: 5000,
  });

  return (
    <div>
      {listNotes?.data?.map((item, idx) => (
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

// comment sementara
// export async function getServerSideProps() {
//   const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
//   const notes = await res.json();
//   return { props: { notes } };
// }
