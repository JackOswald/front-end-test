import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchQueueData } from '../mockApi';

export const queueApi = createApi({
  reducerPath: 'queueApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getQueueData: builder.query<any, void>({
      queryFn: async () => {
        const queueData = await fetchQueueData();
        const json = await queueData.json();
        return {
          data: await json.queueData.queue.customersToday,
        };
      },
    }),
  }),
});

export const { useGetQueueDataQuery } = queueApi;
