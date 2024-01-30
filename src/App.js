
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import VideoPreview from './components/videoPreview';
import activeProjectImage from './assets/VIDEO.jpg';


library.add(fas)
library.add(fab)

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="light-panel">
        <div style={{display: 'inline'}}>
          <h1 style={{width: '30%', marginLeft: '0', marginRight: 'auto'}}>What we do</h1>
          <div style={{width: '70%', marginLeft: 'auto', marginRight: '0', marginTop: '-3%'}}>
            <p>We work with our partners on reducing carbon emissions to net zero, seizing the opportunity to inspire 
              creativity, drive innocation, and secure support needed to delivery sustainable energy long term.</p>
            <ul style={{columns: '2', listStyleType: 'none'}}>
              <li><hr/><div style={{display: 'inline'}}>Technology</div></li>
              <li><hr/><div style={{display: 'inline'}}>Thought Leadership</div> <FontAwesomeIcon style={{float: 'right'}} icon="fa-solid fa-arrow-right" size="lg"/></li>
              <li><hr/><div style={{display: 'inline'}}>Research & Academia</div></li> 
              <li><hr/><div style={{display: 'inline'}}>Reports & Publications</div></li> 
              <li><hr/><div style={{display: 'inline'}}>Projects</div></li> 
              <li><hr/><div style={{display: 'inline'}}>Partnerships</div></li>
              <li><hr/><div style={{display: 'inline'}}>Programmes</div></li> 
              <li><hr/><div style={{display: 'inline'}}>Events</div></li>
            </ul>
          </div>
        </div>
        <hr/>
        <div>
        <h1 style={{width: '30%', marginLeft: '0', marginRight: 'auto'}}>How we work</h1>
          <div style={{width: '70%', marginLeft: 'auto', marginRight: '0', marginTop: '-3%'}}>
            <p>Working closely with industry to define technology challenges and develop the transformational projects to tackle them, 
              encapsulating our ethos of supporting and transitioning to a more diverse energy industry centred on the North Sea.</p>
          </div>
        </div>
        <div style={{display: 'table', width: '100%', tableLayout: 'fixed', borderSpacing: '10px'}}>
          <div style={{display: 'table-cell'}}>
            <h1 style={{fontSize: '4em', marginBottom: '-1%'}}>£175M</h1>
            <b>co-invested with industry</b>
          </div>
          <div style={{display: 'table-cell'}}>
            <h1 style={{fontSize: '4em', marginBottom: '-1%'}}>1,300+</h1>
            <b>technologies screened</b>
          </div>
          <div style={{display: 'table-cell'}}>
            <h1 style={{fontSize: '4em', marginBottom: '-1%'}}>20</h1>
            <b>technologies commercialised</b>
          </div>
        </div>
        <div>
          <a className="content-link" href="" style={{marginRight: "2%"}}>Our Ambition</a>
          <a  className="content-link" href="" style={{marginRight: "2%"}}>Technology Roadmap 2035</a>
          <div style={{display: 'inline', float: 'right'}}>
            <a className="content-link" href="">Annual Report</a>
            <FontAwesomeIcon icon="fa-solid fa-download" size="lg"/>
          </div>
        </div>
      </div>

      <div className="dark-panel">
        <h1 style={{width: '30%', marginLeft: '0', marginRight: 'auto'}}>Active Projects</h1>
        <div style={{width: '70%', marginLeft: 'auto', marginRight: '0', marginTop: '-3%'}}>
          <p>We want to develop technology to accelerate the transition of the oil and gas industry to an affordable net zero future -
              supporting the diversification of our supply chain to position them as technology leaders. The Net Zero Technology Centre continues
              to support the oil and gas industry, working with our project partners as they transition on the net zero journey.</p>
          <a className="content-link" href="" style={{marginRight: "2%"}}>View all projects</a>
          <hr style={{width: '115px', marginLeft: '0'}}/>
        </div>
        <VideoPreview 
          image={activeProjectImage}
          title="Project Type: Decommissioning">
           <p>Technology developer Ecosse-IP are working to develop and field trail Ambient Lifter, an innovative subsea lifting device.</p> 
        </VideoPreview>
      </div>

      <div className="light-panel">
        <h1 style={{width: '30%', marginLeft: '0', marginRight: 'auto'}}>Technology in play, today</h1>
        <div style={{width: '70%', marginLeft: 'auto', marginRight: '0', marginTop: '-3%'}}>
          <p>We've been working across the full spectrum of our technology developers to find innovative solutions that will help today
            accelerate the oil and gas industry to an affordable net zero future.
          </p>
          These technologies are ready now.
          <div>
            Ready for tomorrows technology today? 
            <button className="btn-dark" style={{float: "right", marginTop: "-2%"}}>Get in touch</button>
          </div>
        </div>
      </div>

      <div className="dark-panel">
        <h1>In the spotlight</h1>
      </div>

      <div className="light-panel">
        <h1>News & Insights highlights</h1>
      </div>

      <div className="dark-panel">
        <div className='partnerships-label' >
            <h2 style={{ marginRight:'30%' }} >Partnerships</h2>
            <p style={{ marginLeft:'25%' }}>Our partners help to shape the base portfolio of projects invested in by the Net Zero Technology Centre across our core programmes.</p>
        </div>
        <div className="partner-logos">
            <image className="partner-logo">Centrica</image>
            <div style={{borderLeft:"1px solid", height:"120px"}}></div>
            <image className="partner-logo">EnQuest</image>
            <div style={{borderLeft:"1px solid", height:"120px"}}></div>
            <image className="partner-logo">ExonMobil</image>
            <div style={{borderLeft:"1px solid", height:"120px"}}></div>
            <image className="partner-logo">Apollo</image>
            <div style={{borderLeft:"1px solid", height:"120px"}}></div>
            <image className="partner-logo">Trac</image>
            <div style={{borderLeft:"1px solid", height:"120px"}}></div>
            <image className="partner-logo">wood.</image>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
