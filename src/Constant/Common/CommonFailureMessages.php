<?php
namespace App\Constant\Common;

class CommonFailureMessages {
	public const NOT_FOUND = [
		"code" => "404",
		"message" => "NOT_FOUND",
	];
	public const OK = [
		"code" => "200",
		"message" => "VALID",
	];
	public const INVALID_FORMAT = [
		"code" => "400",
		"message" => "INVALID_FORMAT",
	];
	public const REQUIRED_FIELD = [
		"code" => "400",
		"message" => "REQUIRED_FIELD_NOT_DEFINED",
	];
}