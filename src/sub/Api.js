import React from 'react';
import '../css/Api.css'
import '../css/App.css';

function Api(props) {
  return (
    <section>
      <div className="contents_style">
        <div className='api_con'>
      <h2 className='sub_h2_title'>API Documentation</h2>
        
        <p>This is a lightweight web service (REST interface), which provides an easy way to access the YTS website.</p>
  
        <p>An API (Application Programming Interface) is a protocol intended to be used as an interface by software components to communicate with each other.</p>
        
        <p>Our API supports many methods, so there should not be a problem coding some nice applications.</p>
        
        <p>If you find any bug, or have any questions, or any suggestions, please get in touch with us.</p>
  

      <h3>API Endpoints</h3>
        <ul>
          <li>List Movies</li>
          <li>Movie Details</li>
          <li>Movie Suggestions</li>
          <li>Movie Parental Guides</li>
        </ul>

        <h3>List Movies</h3>
          <p>HTTP GET</p>
              <table>
                <caption></caption>
                <thead>
                  <tr>
                    <th>Endpoint</th>
                    <th>Description</th>
                  </tr>
                </thead>

                <tbody>
                  <td>
                  https://yts.mx/api/v2/list_movies.json<br />
                  https://yts.mx/api/v2/list_movies.jsonp<br />
                  https://yts.mx/api/v2/list_movies.xml
                  </td>
                  <td>Used to list and search through out all the available movies. Can sort, filter, search and order the results</td>
                </tbody>
              </table>         

      </div>
      </div>
    </section>
  );
}

export default Api;