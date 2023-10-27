'use server'

import User from '@/database/user.model'
import { GetTopInteractedTagsParams } from '@/lib/actions/shared.types'
import { connectToDatabase } from '@/lib/mongoose'

export async function getTopInteractedTags (params: GetTopInteractedTagsParams) {
  try {
    await connectToDatabase()
    const { userId, limit = 3 } = params
    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }
    return [{ _id: '1', name: 'Tag1' }, { _id: '2', name: 'Tag2' }, { _id: '3', name: 'Tag3' }]
  } catch (error) {
    console.log(error)
    throw error
  }
}
