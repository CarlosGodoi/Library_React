import React from 'react';
import BookModal from '../../../Components/Modals/BookModal';
import InactivateBookModal from '../../../Components/Modals/inactivateModal';
import LendBook from '../../../Components/Modals/LendBookModal';
import LoanBookModal from '../../../Components/Modals/LoanModal';
import { TObjModal } from '../../../interfaces/books';
import { IBook } from '../../AddBook/interface';
interface IProps {
  objModal: TObjModal;
  closeModal: VoidFunction;
  closeModalInactive: VoidFunction;
  closeModalLoan: VoidFunction;
  closeModalLend: VoidFunction;
  handleModal: (
    modal:
      | 'modalLendBook'
      | 'modalInactiveBook'
      | 'modalLoanBook'
      | 'modalBook',
  ) => void;
  selectedBook: IBook;
  setSelected: React.Dispatch<React.SetStateAction<IBook>>;
}
const RenderModal: React.FC<IProps> = ({
  objModal,
  closeModal,
  handleModal,
  selectedBook,
  setSelected,
  closeModalInactive,
  closeModalLoan,
  closeModalLend,
}) => {
  console.log(objModal);
  if (objModal.modalBook) {
    return (
      <BookModal
        handleModal={handleModal}
        selectedBook={selectedBook}
        setSelected={setSelected}
        closeModal={closeModal}
      />
    );
  }
  if (objModal.modalInactiveBook) {
    return (
      <InactivateBookModal
        closeModal={closeModalInactive}
        selectedBook={selectedBook}
      />
    );
  }

  if (objModal.modalLendBook) {
    return <LendBook closeModal={closeModalLend} selectedBook={selectedBook} />;
  }
  if (objModal.modalLoanBook) {
    return (
      <LoanBookModal closeModal={closeModalLoan} selected={selectedBook} />
    );
  }
  return null;
};

export default RenderModal;
