import React from 'react'
import { Modal, Button, FileDragAndDrop, Spinner } from 'elemental'

import 'styles/app.less'

class Comp extends React.Component {
  render() {
    let ModalBody = Modal.Body
    let ModalFooter = Modal.Footer

    return (
        <Modal isOpen={true} headerTitle={'Modal'} headerHasCloseButton={true} backdropClosesModal={true}>
          <ModalBody>
            Body
          </ModalBody>

          <ModalFooter>
            Footer
          </ModalFooter>
        </Modal>
    )
  }
}

React.render(<Comp />, document.getElementById('app'))
