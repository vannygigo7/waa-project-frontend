
export default function ResponseMessage({status}){
    const renderMessage = ({status, message = ''}) =>{
        switch (status) {
            case true:
                return <div className="alert alert-success" role="alert">Success: {message}</div>;
            case false:
                return <div className="alert alert-danger" role="alert">Failed: {message}</div>;
            default:
                return <></>;
        }
    };

    return (
        <>
            {renderMessage({status})}
        </>
    );
}