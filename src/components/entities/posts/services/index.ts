import axios from 'axios';
import api from '@/components/entities/api';

export const usePostQuery = async () => {
  return await axios({
    method: 'GET',
    
  }).then((res) => res.data);
}

export const usePostMutation = async (post: PostInput, id: number) => {
  return await axios({
    method: 'POST',
    url: api + 'post/id',
    data: post,
  }).then((res) => res.data);
}