/* code from functions/todos-create.js */
import faunadb from 'faunadb' /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: Netlify.env.get("FAUNADB_SERVER_SECRET")
})

export default async (req, context) => {
  const data = await req.json()
  await client.query(
    Paginate(
        Match(
            Index(
                'characterByUser'
                , req.params.userId
            )
        )
    )
  )
  .then((response) => {
    console.log("success", response)
    return new Response(response, { status: 200 })
  }).catch((error) => {
    console.log("error", error)
    return new Response(error, { status: 400 })
  })
}