import { Table } from "antd"
import React, { useState } from "react";
import HeaderSecond from "../../components/HeaderSecond"
import api from "../../services/api";
import '../../style.css'

const ListaPagamentos = () => {
    const [listPagamentosData, setListPagamentosData] = useState([]);

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Nome",
            dataIndex: "nome",
            key: "nome",
        },
        {
            title: "Valor",
            dataIndex: "valor",
            key: "valor",
            
        },
        {
            title: "Último pagamento",
            dataIndex: "ultimoPagamento",
            key: "ultimoPagamento"
        },
        {
            title: "Vencimento",
            dataIndex: "vencimento",
            key: "vencimento"
        }
    ];
    async function listPayments() {
        const response = await api().get("/pagamentos");
        if(response.data.rows.length > 0) {
            setListPagamentosData(response.data.rows);
        }
    }
      
      React.useEffect(() => {
        listPayments();
      }, []);
    return (
        <>
            <HeaderSecond titulo="Listar pagamentos" />
            <div className="table-responsive" style={{ paddingLeft: '10vh', paddingRight: '10vh'}}>
            <Table dataSource={listPagamentosData} columns={columns} />
        </div>
        </>
    )
}
export default ListaPagamentos