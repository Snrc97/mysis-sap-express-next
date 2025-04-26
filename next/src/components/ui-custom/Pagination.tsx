import React, { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, Grid, MoreHorizontalIcon } from 'lucide-react'
import { Pagination as Pgn, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

type PaginationProps = {
    numberOfItems?: number;
    itemsPerPage?: number;
    OnPageChange?: (page: number) => void
};

export default function Pagination(props: PaginationProps) {

    const { numberOfItems = 0, itemsPerPage = 10 } = props

    const pageSize = Math.ceil(numberOfItems / itemsPerPage);

    const [page, setPage] = React.useState(1);

    const [previousEnabled, setPreviousEnabled] = React.useState(page > 1);
    const [nextEnabled, setNextEnabled] = React.useState(page < pageSize);




    const handlePageChange = (page: number) => {

        setPage(page);
        setPreviousEnabled(page > 1);
        setNextEnabled(page < pageSize);
        if (props.OnPageChange) {
            props.OnPageChange(page);
        }
    };




    return <Pgn className="flex flex-row items-center justify-center p-5">
        <PaginationContent className="flex flex-row items-center gap-1">
            <PaginationPrevious className={"flex items-center gap-1 px-2.5 sm:pl-2.5 cursor-pointer" + (previousEnabled ? "" : " opacity-50 cursor-not-allowed")}
                onClick={() => previousEnabled && handlePageChange(page - 1)}
            >
                <ChevronLeftIcon className="size-4" aria-hidden="true" />
                <span className="hidden sm:block">Previous</span>
            </PaginationPrevious>
            {
                previousEnabled &&
                <PaginationItem className="cursor-pointer" onClick={() => previousEnabled && handlePageChange(page - 1)}>{page - 1}</PaginationItem>
            }
            <PaginationItem className='border-2 w-10 h-10 rounded-full flex items-center justify-center'>{page}</PaginationItem>
            {
                nextEnabled &&
                <PaginationItem className="cursor-pointer" onClick={() => nextEnabled && handlePageChange(page + 1)}>{page + 1}</PaginationItem>

            }
            <PaginationNext className={"flex items-center gap-1 px-2.5 sm:pr-2.5 cursor-pointer" + (nextEnabled ? "" : " opacity-50 cursor-not-allowed")}
                onClick={() => nextEnabled && handlePageChange(page + 1)}
            >
                <span className="hidden sm:block">Next</span>
                <ChevronRightIcon className="size-4" aria-hidden="true" />
            </PaginationNext>
        </PaginationContent>
    </Pgn>
};
