import React, {useState} from 'react'
import './modelCard.css'
import Modal from 'react-bootstrap/Modal';
import mod from '../../assets/model1.jpg'
import img1 from '../../assets/mod1.svg'
import img2 from '../../assets/mod2.svg'
import img3 from '../../assets/mod3.svg'
import img4 from '../../assets/mod4.svg'
import img5 from '../../assets/mod5.svg'
import img6 from '../../assets/mod6.svg'
import img7 from '../../assets/mod7.svg'

const ModelCard = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  return (
    <div className='modelcards'>
        <div className='modelcards-title'>
            <div className='modelcards-content-div'>
                <h1>OUR BUSINESS MODEL</h1>
                <div className='modelcards-line'></div>
            </div>
            <p>Our business models are fundamentally built on the Islamic finance principles that support the growth and development of businesses while adhering to the ethical and Shariah-compliant practices. However, in spite of the fact that our products are based on Islamic finance contract, <span style={{color:'#000066', backgroundColor:'white', padding:'0 6px' }}> it is open to all irrespective of their religious affiliation. </span></p> 
        </div>
      <div className='modelcards-container'>
        <div className='model-cards'>
            <div className='model-cards-content'>
                <img src={img1}/>
                <h1>MURABAHA</h1>
                <p>Murabaha, also referred to as cost-plus financing structure in which...</p> 
            </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow1} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show1} onHide={handleClose1} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>MURABAHA</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}> Murabaha, also referred to as cost-plus financing, is an Islamic financing structure in which the seller and buyer agree to the cost and markup of an asset.</p></Modal.Body>
        
      </Modal>
        </div>
        <div className='model-cards'>
            <div className='model-cards-content'>
                <img src={img2}/>
                <h1>IJARAH</h1>
                <p>Ijarah denotes a contract where one party transfers the right to use an... </p>
           </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow2} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>IJARAH</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}> Ijarah denotes a contract where one party transfers the right to use an item he owns to another party for a specified period in exchange for an agreed consideration.</p></Modal.Body>
        
      </Modal>
        </div>
        <div className='model-cards'>
            <div className='model-cards-content'>
                <img src={img3}/>
                <h1>MUSHARKAH</h1>
                <p>This is a classical partnership agreement. All parties involved contribute towards... </p>
           </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow8} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show8} onHide={handleClose8} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>MUSHARKAH</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}> This is a classical partnership agreement. All parties involved contribute towards the financing of a venture. The parties share profits on a pre-agreed ratio while losses are shared according to each parties equity contribution .</p></Modal.Body>
        
      </Modal>
        </div>
        <div className='model-cards'>
            <div className='model-cards-content'>
                <img src={img3} />
                <h1>ISTISNA</h1>
                <p>An Islamic finance technique used to finance the construction...</p>
        </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow3} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>ISTISNA</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}>An Islamic finance technique used to finance the construction or manufacture of assets on terms compliant with Shariah. In an Istisna'a transaction, a lender agrees to buy an asset to be delivered once construction or manufacturing of that asset is complete. The lender pays the purchase price of the asset in accordance with the progress of the asset's construction or manufacture that gives the contractor or manufacturer the liquidity it needs to construct or manufacture the asset. Once manufacture or construction is complete, the lender acquires the asset that it can then sell or lease to the contractor, manufacturer, or a third party for a Profit.</p></Modal.Body>
        
      </Modal>
        </div>
        <div className='model-cards'>
            <div className='model-cards-content'>
                <img src={img4} />
                <h1>MUDARABA</h1>
                <p>An Islamic finance technique in which a financier (rab al maal)...</p>
        </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow4} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show4} onHide={handleClose4} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>MUDARABA</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}>An Islamic finance technique in which a financier (rab al maal) and investment manager (mudareb) establish a profit-sharing partnership to undertake a business or investment activity. Under this structure, the rab al maal provides the financing or funds and the mudareb provides the professional, managerial, and technical know-how to carry out the business or manage the investment. The mudareb must invest the funds on a Shariah-compliant basis (for example, the funds cannot be invested in prohibited (haram) products or activities such as tobacco, alcohol, or gambling). The mudareb earns a fee that is deducted from any profits for managing the funds or business, and the parties share in any profits according to a pre-agreed ratio.</p></Modal.Body>
        
      </Modal>
        </div>
        <div className='model-cards'>
            <div className='model-cards-content'>
                <img src={img5} />
                <h1>QARD</h1>
                <p>Qard hasan is a fund extended on a goodwill basis, mainly for welfare purposes...</p>
       </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow5} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show5} onHide={handleClose5} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>QARD</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}> Qard hasan is a fund extended on a goodwill basis, mainly for welfare purposes. The borrower need only pay back the amount they borrowed, with no interest. </p></Modal.Body>
        
      </Modal>
        </div>
        <div className='model-cards'>
            <div className='model-cards-content'>
            <img src={img6} />
            <h1>SALAM</h1>
            <p>Salam is used as a mode of finance to cater for the working capital needs...</p>
       </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow6} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show6} onHide={handleClose6} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>SALAM</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}> Salam is used as a mode of finance to cater for the working capital needs of businesses. Salam is a contract of Sale where the Seller undertakes to supply some specific commodity to the Buyer at a future date in exchange for a price fully paid in advance.</p></Modal.Body>
        
      </Modal>
        </div>
        <div className='model-cards'>
            <div className='model-cards-content'>
                <img src={img7} />
                <h1>SUKUK</h1>
                <p>Sukuk are certificates or securities of equal value representing undivided...</p>
        </div>
            <div className= 'model-cards-img slide-fwd-center'>
                <img src={mod} />
                <div className='model-cards-background'></div>
                <button onClick={handleShow7} className='model-cards-button'>Learn More</button>
            </div>

    <Modal show={show7} onHide={handleClose7} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{padding:'0 1rem'}}>SUKUK</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{padding:'1rem'}}> Sukuk are certificates or securities of equal value representing undivided shares in ownership of tangible assets, usufructs, ownership of services or (in the ownership of) the assets of particular projects or special investment activity. Sukuk were developed as an alternative to conventional bonds which are not considered permissible as they pay interest and also finance businesses involved in activities not permitted under Shariah.  </p></Modal.Body>
        
      </Modal>
        </div>
      </div>
    </div>
  ) 
}
export default ModelCard
