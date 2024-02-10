import React from "react";
import { createRoot } from "react-dom/client";
import {
  CodePane,
  Deck,
  Heading,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import "normalize.css";

import theme from "../themes/default";

import csvDownloadButton from "../code-examples/csv-download-button.example";
import customCellComponent from "../code-examples/custom-cell-component.example";
import customCellUsage from "../code-examples/custom-cell-usage.example";
import happyPathDataTable from "../code-examples/happy-path-data-table.example";
import presentationalTable from "../code-examples/presentational-table.example";
import selectedRows from "../code-examples/selected-rows.example";
import sharingStateWithCharts from "../code-examples/sharing-state-with-charts.example";
import useDataTableApiMethod from "../code-examples/use-data-table-api-method.example";
import useDataTablePaginator from "../code-examples/use-data-table-paginator.example";

const Presentation = () =>(
  <Deck theme={theme}>
    <Slide>
      <Heading>Data Tables</Heading>
    </Slide>
    <Slide>
      <Heading>Warning</Heading>
      <Text>Objects in mirror may be further than they appear</Text>
    </Slide>
    <Slide>
      <Heading>Motivation</Heading>
      <Text>Share code and state between charts and data tables</Text>
    </Slide>
    <Slide>
      <Heading>Context</Heading>
      <Text>The corresponding backend code should be simplified</Text>
      <Text>
        <a
          href="https://github.com/skilljar/course-platform/pull/8114/files"
          target="_blank" rel="noreferrer"
        >
          Spike code
        </a>
      </Text>
    </Slide>
    <Slide>
      <Heading>Goals</Heading>
      <UnorderedList>
        <ListItem>Share code between charts and tables</ListItem>
        <ListItem>
          Don’t access internal state of child/parent components
        </ListItem>
        <ListItem>
          Be as close to the DRF way of doing things as possible
        </ListItem>
        <ListItem>
          Externalize the data logic from the presentation logic
        </ListItem>
        <ListItem>
          Keep the view logic in js and the model/controller logic in python
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Non-Goals</Heading>
      <UnorderedList>
        <ListItem>
          <em>Directly</em> support updating data
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Just give me a dang data table!</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [1, 1],
          [2, 8],
          [6, 6],
          [21, 25],
          [26, 26],
          [9, 16],
        ]}
      >
        {happyPathDataTable}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>What if I need customization x?</Heading>
      <Text>We expose new data table primitives</Text>
    </Slide>
    <Slide>
      <Heading>Composables</Heading>
      <UnorderedList>
        <ListItem>useDataTableApiMethod</ListItem>
        <ListItem>useDataTablePaginator</ListItem>
        <ListItem>useDataTableFilters</ListItem>
        <ListItem>useDataTableSorter</ListItem>
        <ListItem>useDataTableRowSelector</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>useDataTableApiMethod</Heading>
      <CodePane language="javascript">{useDataTableApiMethod}</CodePane>
    </Slide>
    <Slide>
      <Heading>Sharing state with charts</Heading>
      <CodePane language="javascript">{sharingStateWithCharts}</CodePane>
    </Slide>
    <Slide>
      <Heading>useDataTablePaginator</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [10, 10],
          [12, 14],
          [18, 18],
          [4, 4],
        ]}
      >
        {useDataTablePaginator}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Why opaque wrappers?</Heading>
      <Text>
        paginator is an opaque wrapper around <code>pageNumber</code> and{" "}
        <code>pageSize</code>. By making it opaque, we allow iteration
        without breaking clients.
      </Text>
    </Slide>
    <Slide>
      <Heading>Slots</Heading>
      <UnorderedList>
        <ListItem>Title</ListItem>
        <ListItem>Search box</ListItem>
        <ListItem>Filters</ListItem>
        <ListItem>Paginator</ListItem>
        <ListItem>CSV Download Button</ListItem>
        <ListItem>No Results</ListItem>
        <ListItem>Loading</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Why slots not props?</Heading>
      <Text>
        Allow customization without exposing html/js injection attacks.
      </Text>
    </Slide>
    <Slide>
      <Heading>CSV Download Button</Heading>
      <CodePane
        language="javascript"
        highlightRanges={[
          [10, 10],
          [12, 14],
          [4, 4],
        ]}
      >
        {csvDownloadButton}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Custom Cells</Heading>
      <CodePane language="javascript">{customCellComponent}</CodePane>
    </Slide>
    <Slide>
      <Heading>Custom Cells</Heading>
      <CodePane language="javascript">{customCellUsage}</CodePane>
    </Slide>
    <Slide>
      <Heading>Mutating Data</Heading>
      <Text>
        The data table is strictly presentational, so it does not allow for
        POSTing mutations to data. It instead exposes primitives to allow
        for posting changes
      </Text>
    </Slide>
    <Slide>
      <Heading>Mutating Data</Heading>
      <CodePane language="javascript">{selectedRows}</CodePane>
    </Slide>
    <Slide>
      <Heading>Presentational Data Table</Heading>
      <Text>But I don&apos;t want all the bells and whistles???</Text>
    </Slide>
    <Slide>
      <Heading>Presentational Table</Heading>
      <CodePane language="javascript">{presentationalTable}</CodePane>
    </Slide>
  </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
