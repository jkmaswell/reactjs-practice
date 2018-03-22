import React from 'react';
import ReactPaginate from 'react-paginate';
import './paginator.component.css';

export class Paginator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            handleFunction: props.handleFunction,
            pages: props.pages
        };
    }

    render() {
        return (
            <section>
                <main>
                    <div className="pagination-container">
                        <div>
                            <ReactPaginate previousLabel={"previous"}
                                           nextLabel={"next"}
                                           previousClassName={'previous'}
                                           nextClassName={'next'}
                                           breakLabel={<a href="">...</a>}
                                           breakClassName={"break-me"}
                                           pageCount={this.state.pages}
                                           marginPagesDisplayed={3}
                                           pageRangeDisplayed={3}
                                           onPageChange={this.state.handleFunction}
                                           containerClassName={"pagination"}
                                           subContainerClassName={"pages pagination"}
                                           activeClassName={"active"}/>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}