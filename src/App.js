import React, {Component} from "react";
import 'semantic-ui-css/semantic.min.css'
import {
  List,
  Placeholder,
  Segment,
  Grid,
  Icon,
  Input,
  Divider,
  Container,
  Button,
  Table,
  Label,
  Menu,
} from 'semantic-ui-react' 

class App extends Component{
  render(){
    return(
      <Grid columns='equal'>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Segment placeholder style={{width: "100%"}}>
            <Grid columns={2}>
              <Grid.Column verticalAlign='middle'>
                <Container textAlign='center'>
                  <Icon name="search" size="huge"/>
                  <h3>Cari Dokumen</h3>
                  <Input icon='search' placeholder='Search..' style={{borderRadius:"100px"}}/>
                </Container>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <Container textAlign='center'>
                  <Icon name="file pdf outline" size="huge"/>
                  <h3>Tambah Dokumen Baru</h3>
                  <Button primary>Create Document</Button>
                </Container>
              </Grid.Column>
            </Grid>

              <Divider vertical>
                OR
              </Divider>
          </Segment>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium'/>
                <Placeholder.Line length='short'/>
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>

          <Grid.Column>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium'/>
                <Placeholder.Line length='short'/>
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>

          <Grid.Column>
            <List>
              <h5>Website Terkait</h5>
              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://google.com/'>Google</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://www.facebook.com/'>Facebook</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='http://www.semantic-ui.com'>Semantic UI</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://niomic.com/'>Niomic</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://reactjs.org/'>React</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={10}>
            <Table called>
              {/* input search */}
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>
                    <Menu secondary>
                      <Menu.Menu position='right'>
                        <Menu.Item>
                          <Input icon='search' placeholder='Search'/>
                        </Menu.Item>
                      </Menu.Menu>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {/* Table Header */}
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nama Document</Table.HeaderCell>
                  <Table.HeaderCell>Jenis File</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {/* Table Body */}
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Panduan Belajar CSS
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Panduan Belajar React JS
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              {/* Table Footer */}
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>
                    <Menu floated='right' pagination>
                      {/* Arrow left */}
                      <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                      </Menu.Item>
                      {/* Number */}
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      {/* Arrow right */}
                      <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App;
