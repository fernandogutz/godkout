import './ProTip.css'

const ProTip = ({children}) => {
  return (
    <div className="ProTip">
        <p className="ProTip__msg">
            {children}
        </p>
    </div>
  )
}

export default ProTip