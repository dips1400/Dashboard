import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';

const data = [
  {"timestamp":"2019-01-02T03:50:09.097718","flow_id":52373568,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65036,"dest_ip":"138.68.3.71","dest_port":3306,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010937,"rev":3,"signature":"ET SCAN Suspicious inbound to mySQL port 3306","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.386108","flow_id":52491840,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65386,"dest_ip":"138.68.3.71","dest_port":5915,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2002911,"rev":5,"signature":"ET SCAN Potential VNC Scan 5900-5920","category":"Attempted Information Leak","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.421359","flow_id":52507296,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65438,"dest_ip":"138.68.3.71","dest_port":5432,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010939,"rev":3,"signature":"ET SCAN Suspicious inbound to PostgreSQL port 5432","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.576769","flow_id":52568784,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49238,"dest_ip":"138.68.3.71","dest_port":1433,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010935,"rev":3,"signature":"ET SCAN Suspicious inbound to MSSQL port 1433","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.585758","flow_id":52576512,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49269,"dest_ip":"138.68.3.71","dest_port":1521,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010936,"rev":3,"signature":"ET SCAN Suspicious inbound to Oracle SQL port 1521","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.621656","flow_id":52589280,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49306,"dest_ip":"138.68.3.71","dest_port":5811,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2002910,"rev":5,"signature":"ET SCAN Potential VNC Scan 5800-5820","category":"Attempted Information Leak","severity":2}},
  {"timestamp":"2019-01-02T03:50:11.315110","flow_id":52710912,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49678,"dest_ip":"138.68.3.71","dest_port":22,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2001219,"rev":19,"signature":"ET SCAN Potential SSH Scan","category":"Attempted Information Leak","severity":2}},
  {"timestamp":"2019-01-02T03:51:01.124914","flow_id":52713600,"in_iface":"eth0","event_type":"alert","src_ip":"61.176.222.167","src_port":59947,"dest_ip":"138.68.3.71","dest_port":1433,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010935,"rev":3,"signature":"ET SCAN Suspicious inbound to MSSQL port 1433","category":"Potentially Bad Traffic","severity":2}},
];

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th, td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const Dashboard = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Timestamp',
        accessor: 'timestamp',
      },
      {
        Header: 'Flow ID',
        accessor: 'flow_id',
      },
      {
        Header: 'Interface',
        accessor: 'in_iface',
      },
      {
        Header: 'Event Type',
        accessor: 'event_type',
      },
      {
        Header: 'Source IP',
        accessor: 'src_ip',
      },
      {
        Header: 'Source Port',
        accessor: 'src_port',
      },
      {
        Header: 'Destination IP',
        accessor: 'dest_ip',
      },
      {
        Header: 'Destination Port',
        accessor: 'dest_port',
      },
      {
        Header: 'Protocol',
        accessor: 'proto',
      },
      {
        Header: 'Alert Action',
        accessor: 'alert.action',
      },
      {
        Header: 'Signature',
        accessor: 'alert.signature',
      },
      {
        Header: 'Category',
        accessor: 'alert.category',
      },
      {
        Header: 'Severity',
        accessor: 'alert.severity',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Styles>
      <Container>
        <h2>Network Alert Dashboard</h2>
        <Table {...getTableProps()} striped bordered hover>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Styles>
  );
};

export default Dashboard;
