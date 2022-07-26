import React from 'react'
import Contact_us from './Contact_us.css';
import { Link } from 'react-router-dom';
 function contact_us() {
  return (
   
        <React.Fragment>
            <div class="ScriptTop">
    <div class="rt-container">
        <div class="col-rt-4" id="float-right">
 
           
            
        </div>
        <div class="col-rt-2">
           
        </div>
    </div>
</div>

<header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            
            </div>
        </div>
    </div>
</header>


    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              
               <div>
            <div class="container">
                <div class="contact-parent">
                    <div class="contact-child child1">
                        <p>
                            <i class="fas fa-map-marker-alt"></i> Address <br />
                            <span> Vanaspati Nagar 110
                                <br />
                                Indore,MP
                            </span>
                        </p>

                        <p>
                            <i class="fas fa-phone-alt"></i> Let's Talk <br />
                            <span> +918498849308</span>
                        </p>

                        <p>
                            <i class=" far fa-envelope"></i> General Support <br />
                            <span>contact@shopme.com</span>
                        </p>
                    </div>

                   
                    </div>
                </div>
            </div>
        </div>
    		
           
    		</div>
		</div>
    
    

        <div class="contact-child child2">
                        <div class="inside-contact">
                            <h2>Contact Us</h2>
                            <h3>
                               <span id="confirm" />
                            </h3>
                         </div>
                            <p>Name *</p>
                            <input id="txt_name" type="text" Required="required" />

                            <p>Email *</p>
                            <input id="txt_email" type="text" Required="required" />

                            <p>Phone *</p>
                            <input id="txt_phone" type="text" Required="required" />

                            <p>Subject *</p>
                            <input id="txt_subject" type="text" Required="required" />

                            <p>Message *</p>
                            <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>
                            <Link to="/message">
                            <input type="submit" id="btn_send" value="SEND" />
                            </Link>
            
            </div>
    </React.Fragment>

  )
}

export default contact_us