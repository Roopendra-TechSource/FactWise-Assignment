

// import { AgGridReact } from 'ag-grid-react';
// import { ModuleRegistry, AllCommunityModule, themeQuartz, colorSchemeDarkBlue, colorSchemeLight } from 'ag-grid-community';
// import "ag-grid-community/styles/ag-grid.css";  
// import './App.css';
// import { useState, useEffect } from 'react';  


// ModuleRegistry.registerModules([AllCommunityModule]);


// const ActiveRenderer = ({ value }) => (
//   <span className={`active-badge ${value ? 'active-true' : 'active-false'}`}>
//     {value ? '🟢 Active' : '🔴 Inactive'}
//   </span>
// );

// function App() {
//   const [rowData, setRowData] = useState([]);  
//   // eslint-disable-next-line no-unused-vars
//   const [isDarkMode, setIsDarkMode] = useState(true); 
//   // Fetch JSON data on mount
//   useEffect(() => {
//     fetch('/employees.json') 
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to load employees.json');
//         }
//         return response.json();
//       })
//       .then(data => setRowData(data.employees))
//       .catch(error => {
//         console.error('Error fetching data:', error);
        
//       });
//   }, []);


//   const currentTheme = themeQuartz.withPart(isDarkMode ? colorSchemeDarkBlue : colorSchemeLight);

//  const [colDefs] = useState([
//     { 
//       headerCheckboxSelection: true,  
//       checkboxSelection: true, 
//       width: 50, 
//       sortable: false, 
//       filter: false 
//     },
//     { field: "id", headerName: "ID", width: 60, sortable: true, filter: true },
//     { 
//       field: "firstName", 
//       headerName: "First Name", 
//       width: 120, 
//       sortable: true, 
//       filter: true,
//       cellClass: 'brand-cell'  
//     },
//     { 
//       field: "lastName", 
//       headerName: "Last Name", 
//       width: 120, 
//       sortable: true, 
//       filter: true 
//     },
//     { 
//       field: "email", 
//       headerName: "Email", 
//       width: 200, 
//       sortable: true, 
//       filter: 'agTextColumnFilter' 
//     },
//     { 
//       field: "department", 
//       headerName: "Department", 
//       width: 130, 
//       sortable: true, 
//       filter: 'agSetColumnFilter' 
//     },
//     { 
//       field: "position", 
//       headerName: "Position", 
//       width: 150, 
//       sortable: true, 
//       filter: true 
//     },
//     { 
//       field: "salary", 
//       headerName: "Salary ($)", 
//       width: 120, 
//       sortable: true, 
//       filter: 'agNumberColumnFilter',
//       valueFormatter: (params) => `$${params.value.toLocaleString()}`, 
//       cellRenderer: (params) => (
//         <div style={{ color: params.value >= 95000 ? 'green' : 'orange' }}>
//           {params.value}
//         </div>
//       )
//     },
//     { 
//       field: "hireDate", 
//       headerName: "Hire Date", 
//       width: 120,
//       sortable: true,
//       filter: 'agDateColumnFilter',
//       valueFormatter: (params) => {
//         const date = new Date(params.value);
//         return date.toLocaleDateString();  
//       }
//     },
//     { 
//       field: "age", 
//       headerName: "Age", 
//       width: 80, 
//       sortable: true, 
//       filter: 'agNumberColumnFilter' 
//     },
//     { 
//       field: "location", 
//       headerName: "Location", 
//       width: 120, 
//       sortable: true, 
//       filter: 'agSetColumnFilter' 
//     },
//     { 
//       field: "performanceRating", 
//       headerName: "Perf. Rating", 
//       width: 110,
//       sortable: true,
//       filter: 'agNumberColumnFilter',
//       cellRenderer: (params) => (
//         <div style={{ color: params.value >= 4 ? 'green' : 'orange' }}>
//           {params.value}/5
//         </div>
//       )
//     },
//     { 
//       field: "projectsCompleted", 
//       headerName: "Projects", 
//       width: 100,
//       sortable: true,
//       filter: 'agNumberColumnFilter' 
//     },
//     { 
//       field: "isActive", 
//       headerName: "Status", 
//       width: 120,
//       sortable: true,
//       filter: 'agSetColumnFilter',
//       cellRenderer: ActiveRenderer  
//     },
//     { 
//       field: "manager", 
//       headerName: "Manager", 
//       width: 130,
//       sortable: true,
//       filter: true,
//       valueFormatter: (params) => params.value || 'N/A'  
//     },
//     { 
//       field: "skills", 
//       headerName: "Skills", 
//       width: 200,
//       sortable: false,
//       filter: false,
//       valueFormatter: (params) => params.value ? params.value.join(', ') : 'N/A'  
//     }
//   ]);

//   const defaultColDef = {
//     flex: 1,
//     resizable: true,

//     sortable: true,
//     filter: true,
//   };

//   const gridOptions = {
//     pagination: true,
//     paginationPageSize: 20,
//     suppressPaginationPanel: false,
//     rowSelection: 'multiple',  
//     animateRows: true,
//     suppressRowHoverHighlight: false,
//     rowHeight: 50,
//     headerHeight: 50,
//   };


//   const [quickFilterText, setQuickFilterText] = useState('');

//   return (
//   <div className="app-container">
//       <header className="dashboard-header">
//         <div className="header-left">
//         <h1>👥 Employee Directory</h1>
//         <p className="subtitle">Browse and filter employee data with interactive features</p>
//         </div>
//         <div className="header-right">
//           <input
//             type="text"
//             placeholder="Search Employees"
//             value={quickFilterText}
//             onChange={(e) => setQuickFilterText(e.target.value)}
//             className="search-input"
//           />
//           <button className="new-button">New Employee</button>
//         </div>
//       </header>
      
//       <div 
//         className={`${currentTheme.class} grid-wrapper`}  
//         style={{ 
//           height: 600, 
//           width: '100%', 
//           borderRadius: '12px',
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
//           overflow: 'hidden'
//         }}
//       >
//     <AgGridReact 
//           key={isDarkMode ? 'dark' : 'light'}  
//           rowData={rowData} 
//           columnDefs={colDefs}
//           defaultColDef={defaultColDef}
//           gridOptions={gridOptions}
//           theme={currentTheme}
//           quickFilterText={quickFilterText}  
//           onRowClicked={(event) => console.log('Row clicked:', event.data)}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;



// src/App.js  ← REPLACE THIS ENTIRE FILE
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule, themeQuartz, colorSchemeDarkBlue, colorSchemeLight } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";  
import './App.css';
import { useState, useEffect, useMemo } from 'react';  

ModuleRegistry.registerModules([AllCommunityModule]);

const ActiveRenderer = ({ value }) => (
  <span className={`active-badge ${value ? 'active-true' : 'active-false'}`}>
    {value ? 'Active' : 'Inactive'}
  </span>
);

function App() {
  const [rowData, setRowData] = useState([]);  
  const [isDarkMode, setIsDarkMode] = useState(false);  // starts in light mode

  // Fetch data
  useEffect(() => {
    fetch('/employees.json')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setRowData(data.employees))
      .catch(err => console.error('Failed to load employees.json', err));
  }, []);

  // Summary stats (total employees + avg salary)
  const summary = useMemo(() => {
    if (!rowData.length) return { total: 0, avgSalary: 0 };
    const total = rowData.length;
    const avgSalary = Math.round(rowData.reduce((sum, e) => sum + e.salary, 0) / total);
    return { total, avgSalary };
  }, [rowData]);

  const currentTheme = themeQuartz.withPart(isDarkMode ? colorSchemeDarkBlue : colorSchemeLight);

  const [colDefs] = useState([
    { headerCheckboxSelection: true, checkboxSelection: true, width: 50, sortable: false, filter: false },
    { field: "id", headerName: "ID", width: 60 },
    { field: "firstName", headerName: "First Name", width: 120, cellClass: 'brand-cell' },
    { field: "lastName", headerName: "Last Name", width: 120 },
    { field: "email", headerName: "Email", width: 200, filter: 'agTextColumnFilter' },
    { field: "department", headerName: "Department", width: 130, filter: 'agSetColumnFilter' },
    { field: "position", headerName: "Position", width: 150 },
    { field: "salary", headerName: "Salary ($)", width: 130,
      valueFormatter: p => `$${p.value.toLocaleString()}`,
      cellRenderer: p => (
        <div style={{ color: p.value >= 100000 ? '#10b981' : '#f59e0b', fontWeight: 600 }}>
          ${p.value.toLocaleString()}
        </div>
      )
    },
    { field: "hireDate", headerName: "Hire Date", width: 120,
      valueFormatter: p => new Date(p.value).toLocaleDateString() },
    { field: "age", headerName: "Age", width: 80 },
    { field: "location", headerName: "Location", width: 120, filter: 'agSetColumnFilter' },
    { field: "performanceRating", headerName: "Perf. Rating", width: 110,
      cellRenderer: p => <div style={{ color: p.value >= 4 ? '#10b981' : '#f59e0b' }}>{p.value}/5</div>
    },
    { field: "projectsCompleted", headerName: "Projects", width: 100 },
    { field: "isActive", headerName: "Status", width: 120, cellRenderer: ActiveRenderer, filter: 'agSetColumnFilter' },
    { field: "manager", headerName: "Manager", width: 130, valueFormatter: p => p.value || 'N/A' },
    { field: "skills", headerName: "Skills", width: 220,
      valueFormatter: p => p.value ? p.value.join(', ') : 'N/A' }
  ]);

  const defaultColDef = { flex: 1, resizable: true, sortable: true, filter: true };
  const gridOptions = {
    pagination: true,
    paginationPageSize: 10,   // changed from 20 → now you’ll see multiple pages
    rowSelection: 'multiple',
    animateRows: true,
    rowHeight: 50,
    headerHeight: 50
  };

  const [quickFilterText, setQuickFilterText] = useState('');

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Employee Directory</h1>
          <p className="subtitle">Interactive employee management dashboard</p>
          <p className="summary">
            Total: <strong>{summary.total}</strong> employees • Avg Salary: <strong>${summary.avgSalary.toLocaleString()}</strong>
          </p>
        </div>

        <div className="header-right">
          <input
            type="text"
            placeholder="Search Employees"
            value={quickFilterText}
            onChange={e => setQuickFilterText(e.target.value)}
            className="search-input"
          />
          <button className="new-button">Add Employee</button>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <div className={`${currentTheme.class} grid-wrapper`} style={{ height: 700, width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
          theme={currentTheme}
          quickFilterText={quickFilterText}
        />
      </div>
    </div>
  );
}

export default App;