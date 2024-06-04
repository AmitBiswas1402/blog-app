import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm() {
  const {register, handleSubmit, watch, setValue} = useForm({
    defaultValues: {
      defaultValues: {
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.status || 'active',
      }
    }
  })

  const navigate = useNavigate()
  const userDatae = useSelector(state => state.user.userData)

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

      if (file) {
        appwriteService.deleteFile(post.image)
      }
    }
  }

  return (
    <div>

    </div>
  )
}

export default PostForm