const AddProduct = () => {
  return (
    <div>
      <main id="content" role="main" className="main">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-sm mb-2 mb-sm-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-no-gutter">
                    <li className="breadcrumb-item">
                      <a
                        className="breadcrumb-link"
                        href="./ecommerce-products.html"
                      >
                        Products
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add Product
                    </li>
                  </ol>
                </nav>

                <h1 className="page-header-title">Add Product</h1>

                <div className="mt-2">
                  <a className="text-body me-3" href="javascript:;">
                    <i className="bi-clipboard me-1"></i> Duplicate
                  </a>
                  <a className="text-body" href="javascript:;">
                    <i className="bi-eye me-1"></i> Preview
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <div className="card mb-3 mb-lg-5">
                <div className="card-header">
                  <h4 className="card-header-title">Product information</h4>
                </div>

                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="productNameLabel" className="form-label">
                      Name{" "}
                      <i
                        className="bi-question-circle text-body ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Products are the goods or services you sell."
                      ></i>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="productName"
                      id="productNameLabel"
                      placeholder="Shirt, t-shirts, etc."
                      aria-label="Shirt, t-shirts, etc."
                      value="Tiro track jacket"
                    />
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="SKULabel" className="form-label">
                          SKU
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          name="SKU"
                          id="SKULabel"
                          placeholder="eg. 348121032"
                          aria-label="eg. 348121032"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label htmlFor="weightLabel" className="form-label">
                          Weight
                        </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="weightName"
                            id="weightLabel"
                            placeholder="0.0"
                            aria-label="0.0"
                          />

                          <div className="input-group-append">
                            <div className="tom-select-custom tom-select-custom-end">
                              <select
                                className="js-select form-select tomselected ts-hidden-accessible"
                                autoComplete="off"
                                data-hs-tom-select-options='{
                                    "searchInDropdown": false,
                                    "hideSearch": true,
                                    "dropdownWidth": "6rem"
                                  }'
                                id="tomselect-1"
                              >
                                <option value="lb">lb</option>
                                <option value="oz">oz</option>

                                <option value="g">g</option>
                                <option value="kg" selected="">
                                  kg
                                </option>
                              </select>
                              <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
                                <div className="ts-control">
                                  <div
                                    data-value="kg"
                                    className="item"
                                    data-ts-item=""
                                  >
                                    kg
                                  </div>
                                </div>
                                <div className="tom-select-custom">
                                  <div
                                    className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
                                    style={{ display: "none" }}
                                  >
                                    <div
                                      role="listbox"
                                      className="ts-dropdown-content"
                                      id="tomselect-1-ts-dropdown"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <small className="form-text">
                          Used to calculate shipping rates at checkout and label
                          prices during fulfillment.
                        </small>
                      </div>
                    </div>
                  </div>

                  <label className="form-label">
                    Description{" "}
                    <span className="form-label-secondary">(Optional)</span>
                  </label>

                  <div className="quill-custom">
                    <div className="ql-toolbar ql-snow">
                      <span className="ql-formats">
                        <button type="button" className="ql-bold">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <path
                              className="ql-stroke"
                              d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                            ></path>{" "}
                            <path
                              className="ql-stroke"
                              d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-italic">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="13"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="5"
                              x2="11"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="8"
                              x2="10"
                              y1="14"
                              y2="4"
                            ></line>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-underline">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <path
                              className="ql-stroke"
                              d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                            ></path>{" "}
                            <rect
                              className="ql-fill"
                              height="1"
                              rx="0.5"
                              ry="0.5"
                              width="12"
                              x="3"
                              y="15"
                            ></rect>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-strike">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke ql-thin"
                              x1="15.5"
                              x2="2.5"
                              y1="8.5"
                              y2="9.5"
                            ></line>{" "}
                            <path
                              className="ql-fill"
                              d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"
                            ></path>{" "}
                            <path
                              className="ql-fill"
                              d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-link">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="11"
                              y1="7"
                              y2="11"
                            ></line>{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                            ></path>{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-image">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <rect
                              className="ql-stroke"
                              height="10"
                              width="12"
                              x="3"
                              y="4"
                            ></rect>{" "}
                            <circle
                              className="ql-fill"
                              cx="6"
                              cy="7"
                              r="1"
                            ></circle>{" "}
                            <polyline
                              className="ql-even ql-fill"
                              points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                            ></polyline>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-blockquote">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <rect
                              className="ql-fill ql-stroke"
                              height="3"
                              width="3"
                              x="4"
                              y="5"
                            ></rect>{" "}
                            <rect
                              className="ql-fill ql-stroke"
                              height="3"
                              width="3"
                              x="11"
                              y="5"
                            ></rect>{" "}
                            <path
                              className="ql-even ql-fill ql-stroke"
                              d="M7,8c0,4.031-3,5-3,5"
                            ></path>{" "}
                            <path
                              className="ql-even ql-fill ql-stroke"
                              d="M14,8c0,4.031-3,5-3,5"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button type="button" className="ql-code">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <polyline
                              className="ql-even ql-stroke"
                              points="5 7 3 9 5 11"
                            ></polyline>{" "}
                            <polyline
                              className="ql-even ql-stroke"
                              points="13 7 15 9 13 11"
                            ></polyline>{" "}
                            <line
                              className="ql-stroke"
                              x1="10"
                              x2="8"
                              y1="5"
                              y2="13"
                            ></line>{" "}
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="ql-list"
                          value="bullet"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                          </svg>
                        </button>
                      </span>
                    </div>
                    <div
                      className="js-quill ql-container ql-snow hs-quill-initialized h-[15rem]"
                      data-hs-quill-options='{
                     "placeholder": "Type your description...",
                      "modules": {
                        "toolbar": [
                          ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
                        ]
                      }
                     }'
                    >
                      <div
                        className="ql-editor ql-blank"
                        data-gramm="false"
                        contentEditable="true"
                        data-placeholder="Type your description..."
                      >
                        <p>
                          <br />
                        </p>
                      </div>
                      <div
                        className="ql-clipboard"
                        contentEditable="true"
                      ></div>
                      <div className="ql-tooltip ql-hidden">
                        <a
                          className="ql-preview"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="about:blank"
                        ></a>
                        <input
                          type="text"
                          data-formula="e=mc^2"
                          data-link="https://quilljs.com"
                          data-video="Embed URL"
                        />
                        <a className="ql-action"></a>
                        <a className="ql-remove"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 mb-lg-5">
                <div className="card-header card-header-content-between">
                  <h4 className="card-header-title">Media</h4>

                  <div className="dropdown">
                    <a
                      className="btn btn-ghost-secondary btn-sm"
                      href="#!"
                      id="mediaDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Add media from URL <i className="bi-chevron-down"></i>
                    </a>

                    <div className="dropdown-menu dropdown-menu-end mt-1">
                      <a
                        className="dropdown-item"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#addImageFromURLModal"
                      >
                        <i className="bi-link dropdown-item-icon"></i> Add image
                        from URL
                      </a>
                      <a
                        className="dropdown-item"
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#embedVideoModal"
                      >
                        <i className="bi-youtube dropdown-item-icon"></i> Embed
                        video
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div
                    id="attachFilesNewProjectLabel"
                    className="js-dropzone dz-dropzone dz-dropzone-card dz-clickable"
                  >
                    <div className="dz-message">
                      <img
                        className="avatar avatar-xl avatar-4x3 mb-3"
                        src="./assets/svg/illustrations/oc-browse.svg"
                        alt="Image Description"
                        data-hs-theme-appearance="default"
                      />
                      <img
                        className="avatar avatar-xl avatar-4x3 mb-3"
                        src="./assets/svg/illustrations-light/oc-browse.svg"
                        alt="Image Description"
                        data-hs-theme-appearance="dark"
                      />

                      <h5>Drag and drop your file here</h5>

                      <p className="mb-2">or</p>

                      <span className="btn btn-white btn-sm">Browse files</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-header-title">Variants</h4>
                </div>

                <div className="card-body">
                  <h6 className="text-cap">Options</h6>

                  <div
                    className="js-add-field"
                    data-hs-add-field-options='{
                    "template": "#addAnotherOptionFieldTemplate",
                    "container": "#addAnotherOptionFieldContainer",
                    "defaultCreated": 0
                  }'
                  >
                    <div className="row mb-4">
                      <div className="col-sm-4 mb-2 mb-sm-0">
                        <div className="tom-select-custom">
                          <select
                            className="js-select form-select tomselected ts-hidden-accessible"
                            data-hs-tom-select-options='{
                                "searchInDropdown": false,
                                "hideSearch": true
                              }'
                            id="tomselect-2"
                          >
                            <option value="Color">Color</option>
                            <option value="Material">Material</option>
                            <option value="Style">Style</option>
                            <option value="Title">Title</option>
                            <option value="Size">Size</option>
                          </select>
                          <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
                            <div className="ts-control">
                              <div
                                data-value="Size"
                                className="item"
                                data-ts-item=""
                              >
                                Size
                              </div>
                            </div>
                            <div className="tom-select-custom">
                              <div
                                className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
                                style={{ display: "none" }}
                              >
                                <div
                                  role="listbox"
                                  className="ts-dropdown-content"
                                  id="tomselect-2-ts-dropdown"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter tags"
                          aria-label="Enter tags"
                        />
                      </div>
                    </div>

                    <div id="addAnotherOptionFieldContainer"></div>

                    <a
                      href="javascript:;"
                      className="js-create-field form-link"
                    >
                      <i className="bi-plus"></i> Add another option
                    </a>
                  </div>

                  <div
                    id="addAnotherOptionFieldTemplate"
                    style={{ display: "none" }}
                  >
                    <div className="row mb-4">
                      <div className="col-sm-4 mb-2 mb-sm-0">
                        <div className="tom-select-custom">
                          <select
                            className="js-select-dynamic form-select"
                            data-hs-tom-select-options='{
                                "searchInDropdown": false,
                                "hideSearch": true
                              }'
                          >
                            <option value="Size">Size</option>
                            <option value="Color">Color</option>
                            <option value="Material">Material</option>
                            <option value="Style">Style</option>
                            <option value="Title">Title</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter tags"
                          aria-label="Enter tags"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-3 mb-lg-5">
                <div className="card-header">
                  <h4 className="card-header-title">Pricing</h4>
                </div>

                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="priceNameLabel" className="form-label">
                      Price
                    </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="priceName"
                        id="priceNameLabel"
                        placeholder="0.00"
                        aria-label="0.00"
                      />

                      <div className="input-group-append">
                        <div className="tom-select-custom">
                          <select
                            className="js-select form-select tomselected ts-hidden-accessible"
                            data-hs-tom-select-options='{
                                "searchInDropdown": false,
                                "hideSearch": true,
                                "dropdownWidth": "7rem",
                                "dropdownWrapperclassName": "tom-select-custom tom-select-custom-end"
                              }'
                            id="tomselect-3"
                          >
                            <option value="AED">AED</option>
                            <option value="AFN">AFN</option>
                            <option value="ALL">ALL</option>
                            <option value="AMD">AMD</option>
                            <option value="ANG">ANG</option>
                            <option value="AOA">AOA</option>
                            <option value="ARS">ARS</option>
                            <option value="AUD">AUD</option>
                            <option value="AWG">AWG</option>
                            <option value="AZN">AZN</option>
                            <option value="BAM">BAM</option>
                            <option value="BBD">BBD</option>
                            <option value="BDT">BDT</option>
                            <option value="BGN">BGN</option>
                            <option value="BIF">BIF</option>
                            <option value="BMD">BMD</option>
                            <option value="BND">BND</option>
                            <option value="BOB">BOB</option>
                            <option value="BRL">BRL</option>
                            <option value="BSD">BSD</option>
                            <option value="BWP">BWP</option>
                            <option value="BZD">BZD</option>
                            <option value="CAD">CAD</option>
                            <option value="CDF">CDF</option>
                            <option value="CHF">CHF</option>
                            <option value="CLP">CLP</option>
                            <option value="CNY">CNY</option>
                            <option value="COP">COP</option>
                            <option value="CRC">CRC</option>
                            <option value="CVE">CVE</option>
                            <option value="CZK">CZK</option>
                            <option value="DJF">DJF</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="DZD">DZD</option>
                            <option value="EGP">EGP</option>
                            <option value="ETB">ETB</option>
                            <option value="EUR">EUR</option>
                            <option value="FJD">FJD</option>
                            <option value="FKP">FKP</option>
                            <option value="GBP">GBP</option>
                            <option value="GEL">GEL</option>
                            <option value="GIP">GIP</option>
                            <option value="GMD">GMD</option>
                            <option value="GNF">GNF</option>
                            <option value="GTQ">GTQ</option>
                            <option value="GYD">GYD</option>
                            <option value="HKD">HKD</option>
                            <option value="HNL">HNL</option>
                            <option value="HRK">HRK</option>
                            <option value="HTG">HTG</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILS</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JMD">JMD</option>
                            <option value="JPY">JPY</option>
                            <option value="KES">KES</option>
                            <option value="KGS">KGS</option>
                            <option value="KHR">KHR</option>
                            <option value="KMF">KMF</option>
                            <option value="KRW">KRW</option>
                            <option value="KYD">KYD</option>
                            <option value="KZT">KZT</option>
                            <option value="LAK">LAK</option>
                            <option value="LBP">LBP</option>
                            <option value="LKR">LKR</option>
                            <option value="LRD">LRD</option>
                            <option value="LSL">LSL</option>
                            <option value="MAD">MAD</option>
                            <option value="MDL">MDL</option>
                            <option value="MGA">MGA</option>
                            <option value="MKD">MKD</option>
                            <option value="MMK">MMK</option>
                            <option value="MNT">MNT</option>
                            <option value="MOP">MOP</option>
                            <option value="MRO">MRO</option>
                            <option value="MUR">MUR</option>
                            <option value="MVR">MVR</option>
                            <option value="MWK">MWK</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="MZN">MZN</option>
                            <option value="NAD">NAD</option>
                            <option value="NGN">NGN</option>
                            <option value="NIO">NIO</option>
                            <option value="NOK">NOK</option>
                            <option value="NPR">NPR</option>
                            <option value="NZD">NZD</option>
                            <option value="PAB">PAB</option>
                            <option value="PEN">PEN</option>
                            <option value="PGK">PGK</option>
                            <option value="PHP">PHP</option>
                            <option value="PKR">PKR</option>
                            <option value="PLN">PLN</option>
                            <option value="PYG">PYG</option>
                            <option value="QAR">QAR</option>
                            <option value="RON">RON</option>
                            <option value="RSD">RSD</option>
                            <option value="RUB">RUB</option>
                            <option value="RWF">RWF</option>
                            <option value="SAR">SAR</option>
                            <option value="SBD">SBD</option>
                            <option value="SCR">SCR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="SHP">SHP</option>
                            <option value="SLL">SLL</option>
                            <option value="SOS">SOS</option>
                            <option value="SRD">SRD</option>
                            <option value="STD">STD</option>
                            <option value="SZL">SZL</option>
                            <option value="THB">THB</option>
                            <option value="TJS">TJS</option>
                            <option value="TOP">TOP</option>
                            <option value="TRY">TRY</option>
                            <option value="TTD">TTD</option>
                            <option value="TWD">TWD</option>
                            <option value="TZS">TZS</option>
                            <option value="UAH">UAH</option>
                            <option value="UGX">UGX</option>
                            <option value="UYU">UYU</option>
                            <option value="UZS">UZS</option>
                            <option value="VND">VND</option>
                            <option value="VUV">VUV</option>
                            <option value="WST">WST</option>
                            <option value="XAF">XAF</option>
                            <option value="XCD">XCD</option>
                            <option value="XOF">XOF</option>
                            <option value="XPF">XPF</option>
                            <option value="YER">YER</option>
                            <option value="ZAR">ZAR</option>
                            <option value="ZMW">ZMW</option>
                            <option value="USD" selected="">
                              USD
                            </option>
                          </select>
                          <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
                            <div className="ts-control">
                              <div
                                data-value="USD"
                                className="item"
                                data-ts-item=""
                              >
                                USD
                              </div>
                            </div>
                            <div className="tom-select-custom tom-select-custom-end">
                              <div
                                className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
                                style={{ display: "none" }}
                              >
                                <div
                                  role="listbox"
                                  className="ts-dropdown-content"
                                  id="tomselect-3-ts-dropdown"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <a
                      className="d-inline-block"
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#productsAdvancedFeaturesModal"
                    >
                      <i className="bi-star-fill fs-4 text-warning me-1"></i>{" "}
                      Set &quot;ompare to&quot; price
                    </a>
                  </div>

                  <a
                    className="d-inline-block"
                    href="javascript:;"
                    data-bs-toggle="modal"
                    data-bs-target="#productsAdvancedFeaturesModal"
                  >
                    <i className="bi-star-fill fs-4 text-warning me-1"></i> Bulk
                    discount pricing
                  </a>

                  <hr className="my-4" />

                  <label
                    className="row form-check form-switch"
                    htmlFor="availabilitySwitch1"
                  >
                    <span className="col-8 col-sm-9 ms-0">
                      <span className="text-dark">
                        Availability{" "}
                        <i
                          className="bi-question-circle text-body ms-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Product availability switch toggler."
                        ></i>
                      </span>
                    </span>
                    <span className="col-4 col-sm-3 text-end">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="availabilitySwitch1"
                      />
                    </span>
                  </label>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-header-title">Organization</h4>
                </div>

                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="vendorLabel" className="form-label">
                      Vendor
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="vendor"
                      id="vendorLabel"
                      placeholder="eg. Nike"
                      aria-label="eg. Nike"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="categoryLabel-ts-control"
                      className="form-label"
                      id="categoryLabel-ts-label"
                    >
                      Category
                    </label>

                    <div className="tom-select-custom">
                      <select
                        className="js-select form-select tomselected ts-hidden-accessible"
                        autoComplete="off"
                        id="categoryLabel"
                        data-hs-tom-select-options='{
                            "searchInDropdown": false,
                            "hideSearch": true,
                            "placeholder": "Select category"
                          }'
                      >
                        <option value="Shoes">Shoes</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Others">Others</option>
                        <option value="Clothing">Clothing</option>
                      </select>
                      <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
                        <div className="ts-control">
                          <div
                            data-value="Clothing"
                            className="item"
                            data-ts-item=""
                          >
                            Clothing
                          </div>
                        </div>
                        <div className="tom-select-custom">
                          <div
                            className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
                            style={{ display: "none" }}
                          >
                            <div
                              role="listbox"
                              className="ts-dropdown-content"
                              id="categoryLabel-ts-dropdown"
                              aria-labelledby="categoryLabel-ts-label"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="collectionsLabel-ts-control"
                      className="form-label"
                      id="collectionsLabel-ts-label"
                    >
                      Collections
                    </label>

                    <div className="tom-select-custom">
                      <select
                        className="js-select form-select tomselected ts-hidden-accessible"
                        autoComplete="off"
                        id="collectionsLabel"
                        data-hs-tom-select-options='{
                            "searchInDropdown": false,
                            "hideSearch": true,
                            "placeholder": "Select collections"
                          }'
                      >
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                      </select>
                      <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
                        <div className="ts-control">
                          <div
                            data-value="Winter"
                            className="item"
                            data-ts-item=""
                          >
                            Winter
                          </div>
                        </div>
                        <div className="tom-select-custom">
                          <div
                            className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
                            style={{ display: "none" }}
                          >
                            <div
                              role="listbox"
                              className="ts-dropdown-content"
                              id="collectionsLabel-ts-dropdown"
                              aria-labelledby="collectionsLabel-ts-label"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="form-text">
                      Add this product to a collection so it’s easy to find in
                      your store.
                    </span>
                  </div>

                  <label htmlFor="tagsLabel" className="form-label">
                    Tags
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="tagsLabel"
                    placeholder="Enter tags here"
                    aria-label="Enter tags here"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-fixed start-50 bottom-0 translate-middle-x w-100 zi-99 mb-3 min-w-[40rem]">
          <div className="card card-sm bg-dark border-dark mx-2">
            <div className="card-body">
              <div className="row justify-content-center justify-content-sm-between">
                <div className="col">
                  <button type="button" className="btn btn-ghost-danger">
                    Delete
                  </button>
                </div>

                <div className="col-auto">
                  <div className="d-flex gap-3">
                    <button type="button" className="btn btn-ghost-light">
                      Discard
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <p className="fs-6 mb-0">
                © Front.{" "}
                <span className="d-none d-sm-inline-block">
                  2022 Htmlstream.
                </span>
              </p>
            </div>

            <div className="col-auto">
              <div className="d-flex justify-content-end">
                <ul className="list-inline list-separator">
                  <li className="list-inline-item">
                    <a className="list-separator-link" href="#">
                      FAQ
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a className="list-separator-link" href="#">
                      License
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <button
                      className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasKeyboardShortcuts"
                      aria-controls="offcanvasKeyboardShortcuts"
                    >
                      <i className="bi-command"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
