import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="container w-11/12 mx-auto my-20 p-8 bg-gray-100 rounded-lg">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <h1 className="text-3xl text-center my-10 font-bold mb-6">
        Understanding Key Concepts
      </h1>

      {/* One-way Data Binding */}
      <div className="mb-16 flex space-x-4 gap-5 items-center">
        <div className="w-1/3">
          <img
            src="https://handsontable.com/blog/wp-content/uploads/2023/04/image10.png"
            alt="One-way Data Binding"
            className="rounded-lg"
          />
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl font-bold mb-2">
            1. What is One-way Data Binding?
          </h2>
          <p>
            One-way data binding is a unidirectional flow of data in a web
            application. In this model, the data is transferred from the model
            to the view, allowing changes in the model to reflect automatically
            in the view. This simplifies the development process by reducing the
            need for manual updates and ensuring consistency in the
            application's state.
          </p>
          <div className="mt-4">
            <p className="text-lg font-bold mb-2">Example:</p>
            <pre className="bg-gray-300 p-2 rounded-md">
              {`<input type="text" value={data} />`}
            </pre>
          </div>
        </div>
      </div>

      {/* NPM in Node.js */}
      <div className="mb-16 flex space-x-4 items-center">
        <div className="w-1/3">
          <img
            src="https://images.ctfassets.net/hspc7zpa5cvq/7FC6PtuAjYi9PEd1cXyuuK/74215f88437a976ccff2aa633a4c7c3e/NodeJS-Npm-01-1.png"
            alt="NPM in Node.js"
            className="rounded-lg"
          />
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl font-bold mb-2">
            2. What is NPM in Node.js?
          </h2>
          <p>
            NPM (Node Package Manager) is the default package manager for
            Node.js. It facilitates the installation and management of external
            libraries, packages, and dependencies in a Node.js project.
            Developers can use NPM to easily integrate third-party modules,
            streamline project setup, and manage project dependencies
            efficiently.
          </p>
          <div className="mt-4">
            <p className="text-lg font-bold mb-2">Example:</p>
            <pre className="bg-gray-300 p-2 rounded-md">
              {`npm install package-name`}
            </pre>
          </div>
        </div>
      </div>

      {/* MongoDB vs MySQL Database */}
      <div className="flex space-x-4 items-center">
        <div className="w-1/3">
          <img
            src="https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/images/blog/key-differences.png"
            alt="MongoDB vs MySQL"
            className="rounded-lg"
          />
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl font-bold mb-2">
            3. Difference between MongoDB vs MySQL Database
          </h2>
          <p>
            MongoDB and MySQL are both popular database management systems, but
            they differ in their architecture and data storage models. MongoDB
            is a NoSQL database, providing a flexible, document-oriented
            approach, while MySQL is a traditional relational database. MongoDB
            is schema-less, allowing for dynamic changes, while MySQL relies on
            a predefined schema. The choice depends on project requirements,
            scalability needs, and data structure preferences.
          </p>
          <div className="mt-4">
            <p className="text-lg font-bold mb-2">Factors to Consider:</p>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Factor</th>
                  <th className="px-4 py-2">MongoDB</th>
                  <th className="px-4 py-2">MySQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Data Model</td>
                  <td className="border px-4 py-2">Document-oriented</td>
                  <td className="border px-4 py-2">Relational</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Data Schema</td>
                  <td className="border px-4 py-2">Schema-less (Flexible)</td>
                  <td className="border px-4 py-2">Schema-based (Fixed)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Query Language</td>
                  <td className="border px-4 py-2">JSON-based queries</td>
                  <td className="border px-4 py-2">SQL-based queries</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Scaling</td>
                  <td className="border px-4 py-2">
                    Horizontal scaling is more natural
                  </td>
                  <td className="border px-4 py-2">
                    Vertical scaling is common
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Joins</td>
                  <td className="border px-4 py-2">
                    No support for traditional SQL joins
                  </td>
                  <td className="border px-4 py-2">Supports SQL joins</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">ACID Compliance</td>
                  <td className="border px-4 py-2">Not fully ACID compliant</td>
                  <td className="border px-4 py-2">Fully ACID compliant</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Storage</td>
                  <td className="border px-4 py-2">
                    Uses BSON format (Binary JSON)
                  </td>
                  <td className="border px-4 py-2">
                    Stores data in tables with rows and columns
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Transactions</td>
                  <td className="border px-4 py-2">
                    Supports multi-document transactions
                  </td>
                  <td className="border px-4 py-2">
                    Supports traditional SQL transactions
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Schema Migration</td>
                  <td className="border px-4 py-2">
                    Easier for handling schema-less data
                  </td>
                  <td className="border px-4 py-2">
                    Requires careful management for schema changes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
