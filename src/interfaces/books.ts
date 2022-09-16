export type TStatus = {
        isActive: boolean;
        description: string;
    }

    export type TRentHistory = {
        studentName: string;
        class: string;
        withdrawalDate: string;
        deliveryDate: string;
    }

    export type TBook = {
        tittle: string;
        author: string;
        genre: string;
        status: TStatus;
        image: string;
        systemEntryDate: string;
        synopsis: string;
        rentHistory: TRentHistory[];
    }

    export type TObjModal = {
        modalLendBook: boolean,
        modalInactiveBook: boolean,
        modalLoanBook: boolean,
        modalBook: boolean
    }