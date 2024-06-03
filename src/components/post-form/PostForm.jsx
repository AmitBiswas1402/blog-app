import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import aapwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm() {
  const {register, handleSubmit, watch, setValue} = useForm({
    defaultValues: {
      defaultValues: {
        title: '',
        contents: '',
        tags: [],
      }
    }
  })

  return (
    <div>

    </div>
  )
}

export default PostForm