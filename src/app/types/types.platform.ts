import { Command } from "./types.command";

export interface Platform {
 /// <summary>
        /// Represents the unique ID for the platform.
        /// </summary>
        // [Key]
          Id :number;

        /// <summary>
        /// Represents the name for the platform.
        /// </summary>
        // [Required]
          Name :string;

        /// <summary>
        /// Represents a purchased, valid license for the platform.
        /// </summary>
          LicenseKey:string

        /// <summary>
        /// This is the list of available commands for this platform.
        /// </summary>
         Commands : Command[];
}