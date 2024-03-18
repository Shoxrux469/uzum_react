import "../../index.scss"

const loader = ({ status }) => {
    return (
        <>
            {status &&
                <div div class="loader_box bg-slate-950 bg-opacity-30">
                    <div class="loader bg-white bg-opacity-60 animate-pulse">
                        <div class="inner_loader bg-white animate-pulse bg-opacity-60">
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default loader