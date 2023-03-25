// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PolicyCanceled extends ethereum.Event {
  get params(): PolicyCanceled__Params {
    return new PolicyCanceled__Params(this);
  }
}

export class PolicyCanceled__Params {
  _event: PolicyCanceled;

  constructor(event: PolicyCanceled) {
    this._event = event;
  }

  get policyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get collectionAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PolicyCreated extends ethereum.Event {
  get params(): PolicyCreated__Params {
    return new PolicyCreated__Params(this);
  }
}

export class PolicyCreated__Params {
  _event: PolicyCreated;

  constructor(event: PolicyCreated) {
    this._event = event;
  }

  get policyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get collectionAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expiryTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class PolicyRenewed extends ethereum.Event {
  get params(): PolicyRenewed__Params {
    return new PolicyRenewed__Params(this);
  }
}

export class PolicyRenewed__Params {
  _event: PolicyRenewed;

  constructor(event: PolicyRenewed) {
    this._event = event;
  }

  get policyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get collectionAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expiryTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class InsureABag extends ethereum.SmartContract {
  static bind(address: Address): InsureABag {
    return new InsureABag("InsureABag", address);
  }

  _isExpired(
    _userAddress: Address,
    _collectionAddress: Address,
    _tokenId: BigInt
  ): boolean {
    let result = super.call(
      "_isExpired",
      "_isExpired(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_userAddress),
        ethereum.Value.fromAddress(_collectionAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try__isExpired(
    _userAddress: Address,
    _collectionAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "_isExpired",
      "_isExpired(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_userAddress),
        ethereum.Value.fromAddress(_collectionAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  basePrice(): BigInt {
    let result = super.call("basePrice", "basePrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_basePrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("basePrice", "basePrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  collectionsMerkleRoot(): Bytes {
    let result = super.call(
      "collectionsMerkleRoot",
      "collectionsMerkleRoot():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_collectionsMerkleRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "collectionsMerkleRoot",
      "collectionsMerkleRoot():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getExpiryTimestamp(
    _userAddress: Address,
    _collectionAddress: Address,
    _tokenId: BigInt
  ): BigInt {
    let result = super.call(
      "getExpiryTimestamp",
      "getExpiryTimestamp(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_userAddress),
        ethereum.Value.fromAddress(_collectionAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBigInt();
  }

  try_getExpiryTimestamp(
    _userAddress: Address,
    _collectionAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getExpiryTimestamp",
      "getExpiryTimestamp(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_userAddress),
        ethereum.Value.fromAddress(_collectionAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  uriExtension(): string {
    let result = super.call("uriExtension", "uriExtension():(string)", []);

    return result[0].toString();
  }

  try_uriExtension(): ethereum.CallResult<string> {
    let result = super.tryCall("uriExtension", "uriExtension():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  vaultAddress(): Address {
    let result = super.call("vaultAddress", "vaultAddress():(address)", []);

    return result[0].toAddress();
  }

  try_vaultAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("vaultAddress", "vaultAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _apeEth(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class CancelSubscriptionCall extends ethereum.Call {
  get inputs(): CancelSubscriptionCall__Inputs {
    return new CancelSubscriptionCall__Inputs(this);
  }

  get outputs(): CancelSubscriptionCall__Outputs {
    return new CancelSubscriptionCall__Outputs(this);
  }
}

export class CancelSubscriptionCall__Inputs {
  _call: CancelSubscriptionCall;

  constructor(call: CancelSubscriptionCall) {
    this._call = call;
  }

  get _policyId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _contractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CancelSubscriptionCall__Outputs {
  _call: CancelSubscriptionCall;

  constructor(call: CancelSubscriptionCall) {
    this._call = call;
  }
}

export class MintInsurancePolicyCall extends ethereum.Call {
  get inputs(): MintInsurancePolicyCall__Inputs {
    return new MintInsurancePolicyCall__Inputs(this);
  }

  get outputs(): MintInsurancePolicyCall__Outputs {
    return new MintInsurancePolicyCall__Outputs(this);
  }
}

export class MintInsurancePolicyCall__Inputs {
  _call: MintInsurancePolicyCall;

  constructor(call: MintInsurancePolicyCall) {
    this._call = call;
  }

  get _contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _proof(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get _duration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class MintInsurancePolicyCall__Outputs {
  _call: MintInsurancePolicyCall;

  constructor(call: MintInsurancePolicyCall) {
    this._call = call;
  }
}

export class MintInsurancePolicyApeCall extends ethereum.Call {
  get inputs(): MintInsurancePolicyApeCall__Inputs {
    return new MintInsurancePolicyApeCall__Inputs(this);
  }

  get outputs(): MintInsurancePolicyApeCall__Outputs {
    return new MintInsurancePolicyApeCall__Outputs(this);
  }
}

export class MintInsurancePolicyApeCall__Inputs {
  _call: MintInsurancePolicyApeCall;

  constructor(call: MintInsurancePolicyApeCall) {
    this._call = call;
  }

  get _contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _proof(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get _duration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class MintInsurancePolicyApeCall__Outputs {
  _call: MintInsurancePolicyApeCall;

  constructor(call: MintInsurancePolicyApeCall) {
    this._call = call;
  }
}

export class PauseContractCall extends ethereum.Call {
  get inputs(): PauseContractCall__Inputs {
    return new PauseContractCall__Inputs(this);
  }

  get outputs(): PauseContractCall__Outputs {
    return new PauseContractCall__Outputs(this);
  }
}

export class PauseContractCall__Inputs {
  _call: PauseContractCall;

  constructor(call: PauseContractCall) {
    this._call = call;
  }
}

export class PauseContractCall__Outputs {
  _call: PauseContractCall;

  constructor(call: PauseContractCall) {
    this._call = call;
  }
}

export class RenewPolicyCall extends ethereum.Call {
  get inputs(): RenewPolicyCall__Inputs {
    return new RenewPolicyCall__Inputs(this);
  }

  get outputs(): RenewPolicyCall__Outputs {
    return new RenewPolicyCall__Outputs(this);
  }
}

export class RenewPolicyCall__Inputs {
  _call: RenewPolicyCall;

  constructor(call: RenewPolicyCall) {
    this._call = call;
  }

  get _policyId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _contractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class RenewPolicyCall__Outputs {
  _call: RenewPolicyCall;

  constructor(call: RenewPolicyCall) {
    this._call = call;
  }
}

export class RenewPolicyApeCall extends ethereum.Call {
  get inputs(): RenewPolicyApeCall__Inputs {
    return new RenewPolicyApeCall__Inputs(this);
  }

  get outputs(): RenewPolicyApeCall__Outputs {
    return new RenewPolicyApeCall__Outputs(this);
  }
}

export class RenewPolicyApeCall__Inputs {
  _call: RenewPolicyApeCall;

  constructor(call: RenewPolicyApeCall) {
    this._call = call;
  }

  get _policyId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _contractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class RenewPolicyApeCall__Outputs {
  _call: RenewPolicyApeCall;

  constructor(call: RenewPolicyApeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApeAddressCall extends ethereum.Call {
  get inputs(): SetApeAddressCall__Inputs {
    return new SetApeAddressCall__Inputs(this);
  }

  get outputs(): SetApeAddressCall__Outputs {
    return new SetApeAddressCall__Outputs(this);
  }
}

export class SetApeAddressCall__Inputs {
  _call: SetApeAddressCall;

  constructor(call: SetApeAddressCall) {
    this._call = call;
  }

  get _apeCoin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetApeAddressCall__Outputs {
  _call: SetApeAddressCall;

  constructor(call: SetApeAddressCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get _baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetCollectionsMerkleRootCall extends ethereum.Call {
  get inputs(): SetCollectionsMerkleRootCall__Inputs {
    return new SetCollectionsMerkleRootCall__Inputs(this);
  }

  get outputs(): SetCollectionsMerkleRootCall__Outputs {
    return new SetCollectionsMerkleRootCall__Outputs(this);
  }
}

export class SetCollectionsMerkleRootCall__Inputs {
  _call: SetCollectionsMerkleRootCall;

  constructor(call: SetCollectionsMerkleRootCall) {
    this._call = call;
  }

  get _merkleRoot(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetCollectionsMerkleRootCall__Outputs {
  _call: SetCollectionsMerkleRootCall;

  constructor(call: SetCollectionsMerkleRootCall) {
    this._call = call;
  }
}

export class SetRateCall extends ethereum.Call {
  get inputs(): SetRateCall__Inputs {
    return new SetRateCall__Inputs(this);
  }

  get outputs(): SetRateCall__Outputs {
    return new SetRateCall__Outputs(this);
  }
}

export class SetRateCall__Inputs {
  _call: SetRateCall;

  constructor(call: SetRateCall) {
    this._call = call;
  }

  get _rate(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRateCall__Outputs {
  _call: SetRateCall;

  constructor(call: SetRateCall) {
    this._call = call;
  }
}

export class SetURIExtensionCall extends ethereum.Call {
  get inputs(): SetURIExtensionCall__Inputs {
    return new SetURIExtensionCall__Inputs(this);
  }

  get outputs(): SetURIExtensionCall__Outputs {
    return new SetURIExtensionCall__Outputs(this);
  }
}

export class SetURIExtensionCall__Inputs {
  _call: SetURIExtensionCall;

  constructor(call: SetURIExtensionCall) {
    this._call = call;
  }

  get _uriExtension(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetURIExtensionCall__Outputs {
  _call: SetURIExtensionCall;

  constructor(call: SetURIExtensionCall) {
    this._call = call;
  }
}

export class SetVaultAddressCall extends ethereum.Call {
  get inputs(): SetVaultAddressCall__Inputs {
    return new SetVaultAddressCall__Inputs(this);
  }

  get outputs(): SetVaultAddressCall__Outputs {
    return new SetVaultAddressCall__Outputs(this);
  }
}

export class SetVaultAddressCall__Inputs {
  _call: SetVaultAddressCall;

  constructor(call: SetVaultAddressCall) {
    this._call = call;
  }

  get _vaultAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetVaultAddressCall__Outputs {
  _call: SetVaultAddressCall;

  constructor(call: SetVaultAddressCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseContractCall extends ethereum.Call {
  get inputs(): UnpauseContractCall__Inputs {
    return new UnpauseContractCall__Inputs(this);
  }

  get outputs(): UnpauseContractCall__Outputs {
    return new UnpauseContractCall__Outputs(this);
  }
}

export class UnpauseContractCall__Inputs {
  _call: UnpauseContractCall;

  constructor(call: UnpauseContractCall) {
    this._call = call;
  }
}

export class UnpauseContractCall__Outputs {
  _call: UnpauseContractCall;

  constructor(call: UnpauseContractCall) {
    this._call = call;
  }
}

export class WithdrawApeToVaultCall extends ethereum.Call {
  get inputs(): WithdrawApeToVaultCall__Inputs {
    return new WithdrawApeToVaultCall__Inputs(this);
  }

  get outputs(): WithdrawApeToVaultCall__Outputs {
    return new WithdrawApeToVaultCall__Outputs(this);
  }
}

export class WithdrawApeToVaultCall__Inputs {
  _call: WithdrawApeToVaultCall;

  constructor(call: WithdrawApeToVaultCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawApeToVaultCall__Outputs {
  _call: WithdrawApeToVaultCall;

  constructor(call: WithdrawApeToVaultCall) {
    this._call = call;
  }
}

export class WithdrawToVaultCall extends ethereum.Call {
  get inputs(): WithdrawToVaultCall__Inputs {
    return new WithdrawToVaultCall__Inputs(this);
  }

  get outputs(): WithdrawToVaultCall__Outputs {
    return new WithdrawToVaultCall__Outputs(this);
  }
}

export class WithdrawToVaultCall__Inputs {
  _call: WithdrawToVaultCall;

  constructor(call: WithdrawToVaultCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawToVaultCall__Outputs {
  _call: WithdrawToVaultCall;

  constructor(call: WithdrawToVaultCall) {
    this._call = call;
  }
}
