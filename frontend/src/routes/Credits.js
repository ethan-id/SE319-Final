import React from "react";

const Credits = () => {
    return (
        <div class="container px-4 mt-3 pb-5" id="custom-cards">
            <div class="col d-flex flex-column py-3 align-items-start gap-2">
                <h1 class="fw-bold">SE/ComS 319: Construction of User Interfaces, Spring 2023</h1>
                <h2>Taught By: Dr. Abraham N. Aldaco Gastelum</h2>
                <h4>Class Description</h4>
                <p class="text-body">Overview of user interface design. Evaluation and testing of user interfaces. Review of principles of object orientation, object-oriented design and analysis using UML in the context of user interface design. Design of windows, menus and commands. Developing Web and Windows-based user-interfaces. Event-driven programming. Introduction to Frameworks and APIs for the construction of user interfaces.</p>
            </div>

            <h2 class="py-3 fw-bold">Contributors</h2>
        
            <div class="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 pb-5">
              <div class="col">
                <div class="profileCardcard card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="mb-4 display-6 lh-1 fw-bold">Ethan Hancock</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="d-flex align-items-center me-3">
                        ehancock@iastate.edu
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        
              <div class="col">
                <div class="profileCard card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h3 class="mb-4 display-6 lh-1 fw-bold">Christian Deam</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="d-flex align-items-center me-3">
                        cmdeam@iastate.edu
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Credits;