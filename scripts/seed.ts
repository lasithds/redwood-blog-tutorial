import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.PostCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      {
        title: 'Welcome to redwood',
        body: 'Aliqua nulla minim in dolore id mollit sint sed voluptate officia proident veniam dolor nisi cillum duis dolor cillum minim eu exercitation enim eu pariatur ut ea sint exercitation exercitation quis amet sint ex do do nulla ut aliquip irure nisi id consectetur esse laboris pariatur deserunt aliquip reprehenderit sint enim dolor enim culpa commodo sint est occaecat consequat excepteur cupidatat labore veniam minim voluptate aliqua aute laboris aute do ut culpa in deserunt quis magna ut proident labore ex cillum sed fugiat deserunt laborum ullamco in est aliqua magna irure nostrud enim ex et tempor do non est minim laborum quis sunt ad incididunt commodo cupidatat velit mollit irure incididunt ut est duis incididunt dolor elit consequat veniam proident consectetur do amet aliqua et aliqua proident proident laboris eiusmod magna culpa pariatur pariatur.',
      },
      {
        title: 'New Post',
        body: 'This post was seeded using scripts. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.PostCreateArgs['data']) => {
        const record = await db.post.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
