// @flow
import Action from '../lib/Action';

export type SendUsingLedgerParams = {
  receiver: string,
  amount: string
};

// ======= Sending ADA using Trezor ACTIONS =======

export default class LedgerSendActions {
  cancel: Action<void> = new Action();
  sendUsingLedger: Action<SendUsingLedgerParams> = new Action();
}