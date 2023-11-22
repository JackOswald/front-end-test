import { useEffect, useState } from 'react';
import { RootState } from '../store';
import { Customer as CustomerCard } from './components/Customer';
import { SearchBar } from './components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { updateQueue, CustomerType } from './queueSlice';
import { useGetQueueDataQuery } from '../services/queueApi';
import { Button as RefreshButton } from './components/Button';

export const QueueScreen = () => {
  const customersQueue = useSelector((state: RootState) => state.queue);
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetQueueDataQuery();

  const [isRefreshButtonDisabled, setIsRefreshButtonDisabled] =
    useState<boolean>(false);
  const [filteredCustomers, setFilteredCustomers] = useState<CustomerType>([]);

  useEffect(() => {
    dispatch(updateQueue(data));
    setFilteredCustomers(customersQueue);
  }, [customersQueue, data, dispatch]);

  const handleRefreshButtonClick = () => {
    if (!isRefreshButtonDisabled) {
      setIsRefreshButtonDisabled(true);
      setFilteredCustomers([]);
      setTimeout(() => {
        setIsRefreshButtonDisabled(false);
      }, 30000);
      refetch();
    }
  };

  const handleFilter = (searchTerm: string) => {
    const filteredCustomers = customersQueue.filter((customers) => {
      return customers.customer.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    setFilteredCustomers(filteredCustomers);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error, please try again later</div>;

  return (
    <>
      <SearchBar filterChange={handleFilter} />
      <RefreshButton
        name='Refresh Data'
        onClick={handleRefreshButtonClick}
        disabled={isRefreshButtonDisabled}
      />
      {filteredCustomers.length === 0 ? (
        <div>No results found</div>
      ) : (
        filteredCustomers.map((customers) => {
          return (
            <CustomerCard
              key={customers.customer.id}
              name={customers.customer.name}
              emailAddress={customers.customer.emailAddress}
              expectedTime={customers.expectedTime}
            />
          );
        })
      )}
    </>
  );
};
