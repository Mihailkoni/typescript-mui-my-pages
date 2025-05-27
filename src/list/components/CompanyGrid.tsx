import stocks from "../Table";
import { DataGrid, GridRowsProp, GridColDef  } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function BuildingsGrid() {

    const rows: GridRowsProp = stocks;

    const columns: GridColDef[] = [
        { field: 'Название',flex:1},
        { field: 'Сектор',flex:1},
        { field: 'Цена',flex:0.5},
        { field: 'Изменение',flex:1},
        { field: 'Индекс',flex:1},
        { field: 'Капитализация',flex:1},
        { field: 'P/E',flex:0.5},
        { field: 'P/S',flex:0.5}
    ];      
    return (
        <Container maxWidth="lg" sx={{height:'700px',mt:'20px'}}>
          <DataGrid 
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
            rows={rows} 
            columns={columns}
            pageSizeOptions={[10, 20, 30, 100]}
            showToolbar
            style={{fontFamily:"Montserrat"}}
          />
        </Container>
  );
}

 export default BuildingsGrid;