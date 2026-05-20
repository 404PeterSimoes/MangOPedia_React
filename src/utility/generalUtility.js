export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-pt', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
