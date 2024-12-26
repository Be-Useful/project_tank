import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import { title } from "process";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard"; 
import {client} from "@/sanity/lib/client";
import { ST } from "next/dist/shared/lib/utils";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { Replace } from "lucide-react";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,}: {searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = {search: query || null};

  const session = await auth();
  console.log(session?.id);

  //const posts = await client.fetch(STARTUPS_QUERY);
  const {data:posts} = await sanityFetch( {query: STARTUPS_QUERY,params});

//   const posts = [{
//     _createdAt: new Date(),
//     views: 100,
//     author: {_id:1,name:'Hoang'},
//     _id:1,
//     description: 'This is a description',
//     image: "https://placehold.co/600*400",
//     category: 'Technology',
//     title: 'AI Metaverse and Facial Recognition Technology',
//   },
// ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
        Showcase Your Projects, <br />
        Network with Innovators,<br/> and Attract Opportunities.
        </h1>

        <p className="sub-heading !max-w-3xl">
        Fire Up Your Projects Sky-High, and Dominate Virtual Competitions with Project Tank!
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "All Projects"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post:StartupTypeCard, index:number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No Projects found</p>
          )}
        </ul>

      </section>
      <SanityLive />
    </>
  );
}