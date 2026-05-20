import { useState } from 'react';
import {
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from '../../store/api/ordersApi';
import { toast } from 'react-toastify';
import OrderTable from '../../components/orders/OrderTable';
import { ORDER_STATUS_OPTIONS } from '../../utility/constants';
import OrderDetailsModal from '../../components/orders/OrderDetailsModal';

function OrderManagement() {
  const { data: orders = [], isLoading, error, refetch } = useGetOrdersQuery();

  const [updateOrder] = useUpdateOrderMutation();

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubttiming] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [statusFilter, setStatusFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const handleFormSubmit = async (formData) => {
    setIsSubttiming(true);
    try {
      let result;

      if (result.isSuccess !== false) {
        toast.success('Menu item created successfully!');
        refetch();
      } else {
        toast.error('Failed to create the Menu item');
      }

      setShowModal(false);
      resetForm();

      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubttiming(false);
    }
  };

  const handleEditOrder = (order) => {
    setShowModal(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter((order) => {
    const statusMatch = statusFilter ? order.status === statusFilter : true;

    const searchMatch = searchFilter
      ? order.pickUpName.toLowerCase().includes(searchFilter.toLowerCase()) ||
        order.pickUpEmail.toLowerCase().includes(searchFilter.toLowerCase()) ||
        order.pickUpPhoneNumber
          .toLowerCase()
          .includes(searchFilter.toLowerCase())
      : true;

    return statusMatch && searchMatch;
  });

  return (
    <div className="container-fluid p-4 mx-3">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2>Order Management</h2>
              <p className="text-muted mb-0">Manage your restaurant's orders</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div>
                <label className="form-label small fw-semibold text-uppercase text-muted mb-1">
                  Search Customer
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name, email, or phone..."
                  style={{ minWidth: '350px' }}
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label small fw-semibold text-uppercase text-muted mb-1">
                  Filter by Status
                </label>
                <select
                  className="form-select"
                  style={{ minWidth: '200px' }}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Orders</option>
                  {ORDER_STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <OrderTable
                orders={filteredOrders}
                isLoading={isLoading}
                error={error}
                onEdit={handleEditOrder}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <OrderDetailsModal
          order={selectedOrder}
          onSubmit={handleFormSubmit}
          onClose={handleCloseModal}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}

export default OrderManagement;
