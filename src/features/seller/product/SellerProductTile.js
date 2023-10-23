export default function SellerProductTile(props) {

    const {product, index} = props;

    const goEditProduct = () => {

    }

    const goProductDetail = () => {

    }

    return (<tr key={product.id}>
        <th scope="row">{index + 1}</th>
        <td className="align-middle">
            <img className="rounded"
                 src="https://jennifermaker.com/wp-content/uploads/gift-box-templates-cricut-f-735x735.jpg"
                 width="80px" height="80px" alt=""/>
        </td>
        <td className="align-middle">Product 1</td>
        <td className="align-middle">$20</td>
        <td className="align-middle">Released</td>
        <td className="align-middle">
            <button className="btn btn-secondary mx-1" onClick={goProductDetail}><i className="bi bi-eye"></i></button>
            <button className="btn btn-secondary mx-1" onClick={goEditProduct}><i className="bi bi-pencil"></i></button>

        </td>
    </tr>);
}