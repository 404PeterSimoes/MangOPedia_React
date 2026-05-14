import { useState } from 'react';
import MenuItemModal from '../../components/menuItems/MenuItemModal';
import MenuItemTable from '../../components/menuItems/MenuItemTable';
import { useGetMenuItemsQuery } from '../../store/api/menuItemApi';

function MenuManagement() {
  const {
    data: menuItems = [],
    isLoading,
    error,
    refetch,
  } = useGetMenuItemsQuery();

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubttiming] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    specialTag: '',
    category: '',
    price: '',
    image: null,
  });

  const handleFormSubmit = () => {
    setIsSubttiming(true);
    try {
      // call api to create
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubttiming(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
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
        />
      )}
    </div>
  );
}

export default MenuManagement;
