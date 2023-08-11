import React, {Component} from 'react'
import LogService from "../services/LogService";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

class ListLogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logs: []
        }
    }

    componentDidMount() {
        const item = JSON.parse(window.sessionStorage.getItem('user'));
        // console.log(item.data.token);
        // var data = JSON.parse(item);
        // console.log(data.username);
        var dataTable;
        var dataArray;
        var token;
        token = item.data.token;

        LogService.getLogs(item.data.token).then((res) => {
            dataArray = res.data;
            this.setState({logs: res.data})
        });

        //initialize datatable
        $(document).ready(function () {
            console.log(JSON.stringify(dataArray));

            // var dataR = dataArray.map(d=>[d.logId, d.url,d.request,d.response]);
            setTimeout(function () {
                dataTable = $('#example').DataTable({
                    serverSide:true,
                    ajax: {
                        url: 'http://localhost:8080/admin/get-log',
                        type: 'GET',
                        method: "GET",
                        dataType: 'json',
                        headers:{
                            "Authorization": "Bearer " + token
                        }
                    },
                    columns: [
                        {title: 'LogId'},
                        {title: 'Url'},
                        {title: 'Request'},
                        {title: 'Response'},
                    ],
                    // dom: 'Bflrtip',
                    // data: dataArray,
                    scrollX: true
                });

                // var json = Object.assign({}, dataArray);

                // dataTable.rows.add(JSON.stringify(json) ).draw();
            }, 1000);

        });
    }

    render() {
        //Datatable HTML
        return (
            <div>
                <div className="jumbotron text-center">
                    <h3>Logs</h3>
                </div>

                <div>
                    <table id="example" className="display nowrap" style={{width: '100%'}}>
                        {/*<thead>*/}
                        {/*<tr>*/}
                        {/*    <th>ID</th>*/}
                        {/*    <th>Url</th>*/}
                        {/*    <th>Request</th>*/}
                        {/*    <th style={{width:'100px'}}>Response</th>*/}
                        {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*{this.state.logs.map((result) => {*/}
                        {/*    return (*/}
                        {/*        <tr key={result.logId}>*/}
                        {/*            <td>{result.logId}</td>*/}
                        {/*            <td>{result.url}</td>*/}
                        {/*            <td>{result.request}</td>*/}
                        {/*            <td>{result.response}</td>*/}
                        {/*        </tr>*/}

                        {/*    )*/}
                        {/*})}*/}
                        {/*</tbody>*/}
                    </table>
                </div>
            </div>
        );
    }
}

export default ListLogComponent;