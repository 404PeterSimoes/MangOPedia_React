import { useState } from 'react';
import {
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from '../../store/api/ordersApi';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useUpdateMenuItemMutation } from '../../store/api/menuItemApi';

function OrderManagement() {
  const { data: orders = [], isLoading, error, refetch } = useGetOrdersQuery();

  const [updateOrder] = useUpdateMenuItemMutation();

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubttiming] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null); // to edit

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

  return (
    <div className="container-fluid p-4 mx-3">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2>Menu Item Management</h2>
              <p className="text-muted mb-0">
                Manage your restaurant's menu items
              </p>
            </div>
            <button className="btn btn-primary" onClick={handleAddMenuItem}>
              <i className="bi bi-plus-circle me-2"></i>
              Add Menu Item
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <MenuItemTable
                menuItems={menuItems}
                isLoading={isLoading}
                error={error}
                onDelete={handleDeleteMenuItem}
                onEdit={handleEditMenuItem}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <MenuItemModal
          formData={formData}
          onSubmit={handleFormSubmit}
          onClose={handleCloseModal}
          isSubmitting={isSubmitting}
          onChange={handleInputChange}
          isEditing={!!selectedMenuItem}
        />
      )}
    </div>
  );
}

export default OrderManagement;
