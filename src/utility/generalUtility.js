import { ORDER_STATUS_OPTIONS } from './constants';

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-pt', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getOrderStatusColor = (status) => {
  const statusOptions = ORDER_STATUS_OPTIONS.find(
    (option) => option.value === status,
  );
  return statusOptions?.color || 'secondary';
};
