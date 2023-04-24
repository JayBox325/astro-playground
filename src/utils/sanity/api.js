import { useSanityClient, groq } from 'astro-sanity';

export async function getAllProjects() {
  const query = groq` 
    *[_type == "project" && completed < now()] | order(completed desc){
        completed,
        title,
        url,
        partner->{
            name,
            shortName,
            url
        },
        tags[]->{
            title
        }
    }
  `
  
  const projects = await useSanityClient().fetch(query)
  return projects
}